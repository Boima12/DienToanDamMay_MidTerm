const { StatusCodes } = require('http-status-codes')
const { NotFoundError } = require('../errors')
const { getReadBookModel } = require('../models/readBook.js')
const { getWriteBookModel } = require('../models/writeBook.js')
const { prepareBookData } = require('../services/bookService.js')

const getAllBooks = async (req, res) => {
  const books = await getReadBookModel().find({}).sort({ createdAt: -1 })
  if (!req.path.startsWith('/api/')) {
    return res.render('books/list', { books })
  }
  res.status(StatusCodes.OK).json({ books })
}

const getBook = async (req, res) => {
  const book = await getReadBookModel().findById(req.params.id)

  if (!book) {
    throw new NotFoundError(`Book ${req.params.id} not found`)
  }

  res.status(StatusCodes.OK).json({ book })
}

const createBook = async (req, res) => {
  const book = await getWriteBookModel().create(prepareBookData(req.body))

  if (!req.path.startsWith('/api/')) {
    return res.redirect('/books')
  }
  res.status(StatusCodes.CREATED).json({ book })
}

const showNewBookForm = (req, res) => {
  res.render('books/new', { error: null })
}

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  showNewBookForm,
}
