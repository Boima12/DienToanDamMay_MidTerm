const { connections } = require('../db/connections.js')
const bookSchema = require('./bookSchema.js')

const getReadBookModel = () => {
  if (!connections.read) {
    throw new Error('Read database connection is not ready')
  }
  return connections.read.models.Book || connections.read.model('Book', bookSchema)
}

module.exports = { getReadBookModel }
