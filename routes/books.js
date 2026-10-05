const express = require('express')
const {
  getAllBooks,
  getBook,
  createBook,
} = require('../controllers/books.js')

const router = express.Router()

router.route('/').get(getAllBooks).post(createBook)
router.route('/:id').get(getBook)

module.exports = router
