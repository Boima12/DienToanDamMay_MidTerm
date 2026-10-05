const mongoose = require('mongoose')

const requiredUri = (name) => {
  const uri = process.env[name]
  if (!uri) {
    throw new Error(`${name} is not configured`)
  }
  return uri
}

const connections = {}

const connectReadWrite = async () => {
  const readConnection = mongoose.createConnection(requiredUri('MONGO_URI_USER_READONLY'), {
    dbName: process.env.MONGO_DB_NAME || 'DB_23IT010',
  })
  const writeConnection = mongoose.createConnection(requiredUri('MONGO_URI_USER_WRITEONLY'), {
    dbName: process.env.MONGO_DB_NAME || 'DB_23IT010',
  })

  try {
    await Promise.all([readConnection.asPromise(), writeConnection.asPromise()])
  } catch (error) {
    await Promise.allSettled([readConnection.close(), writeConnection.close()])
    throw error
  }

  connections.read = readConnection
  connections.write = writeConnection
  console.log('Connected to MongoDB with separate read/write accounts')
  return connections
}

const closeReadWrite = async () => {
  await Promise.all(
    Object.values(connections).map((connection) => connection.close())
  )
}

module.exports = { connections, connectReadWrite, closeReadWrite }
