const mongoose = require('mongoose')
const bookSchema = require('./bookSchema.js')

module.exports = mongoose.model('Book', bookSchema)
