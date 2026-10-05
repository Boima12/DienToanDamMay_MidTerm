const { StatusCodes } = require('http-status-codes')
const { NotFoundError } = require('../errors')
<<<<<<< HEAD
const Book = require('../models/Book.js')

const getAllBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 })
=======
const { getReadBookModel } = require('../models/readBook.js')
const { getWriteBookModel } = require('../models/writeBook.js')
const { prepareBookData } = require('../services/bookService.js')

const getAllBooks = async (req, res) => {
  const books = await getReadBookModel().find({}).sort({ createdAt: -1 })
  if (!req.path.startsWith('/api/')) {
    return res.render('books/list', { books })
  }
>>>>>>> work_session
  res.status(StatusCodes.OK).json({ books })
}

const getBook = async (req, res) => {
<<<<<<< HEAD
  const book = await Book.findById(req.params.id)
=======
  const book = await getReadBookModel().findById(req.params.id)
>>>>>>> work_session

  if (!book) {
    throw new NotFoundError(`Book ${req.params.id} not found`)
  }

  res.status(StatusCodes.OK).json({ book })
}

const createBook = async (req, res) => {
<<<<<<< HEAD
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

=======
  const book = await getWriteBookModel().create(prepareBookData(req.body))

  if (!req.path.startsWith('/api/')) {
    return res.redirect('/books')
  }
  res.status(StatusCodes.CREATED).json({ book })
}

const showNewBookForm = (req, res) => {
  res.render('books/new', { error: null })
}

>>>>>>> work_session
module.exports = {
  getAllBooks,
  getBook,
  createBook,
<<<<<<< HEAD
=======
  showNewBookForm,
>>>>>>> work_session
}
