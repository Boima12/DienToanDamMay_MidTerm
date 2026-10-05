const express = require('express')
const { getAllBooks, createBook, showNewBookForm } = require('../controllers/books.js')

const router = express.Router()

router.get('/books', getAllBooks)
router.get('/books/new', showNewBookForm)
router.post('/books', express.urlencoded({ extended: true }), createBook)
router.get('/session-check', (req, res) => {
  req.session.views = (req.session.views || 0) + 1
  res.json({ sessionViews: req.session.views, store: 'MongoDB Atlas' })
})

module.exports = router
