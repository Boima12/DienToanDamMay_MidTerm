const { StatusCodes } = require('http-status-codes')
const { NotFoundError } = require('../errors')
const Book = require('../models/Book.js')

const getAllBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 })
  res.status(StatusCodes.OK).json({ books })
}

const getBook = async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    throw new NotFoundError(`Book ${req.params.id} not found`)
  }

  res.status(StatusCodes.OK).json({ book })
}

const createBook = async (req, res) => {
  const { productCode, title, author, price, category } = req.body
  const book = await Book.create({
    productCode,
    title,
    author,
    price,
    category,
  })

  res.status(StatusCodes.CREATED).json({ book })
}

module.exports = {
  getAllBooks,
  getBook,
  createBook,
}
