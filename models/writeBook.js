const { connections } = require('../db/connections.js')
const bookSchema = require('./bookSchema.js')

const getWriteBookModel = () => {
  if (!connections.write) {
    throw new Error('Write database connection is not ready')
  }
  return connections.write.models.Book || connections.write.model('Book', bookSchema)
}

module.exports = { getWriteBookModel }
