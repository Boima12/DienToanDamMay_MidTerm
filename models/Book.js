const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
  {
    productCode: {
      type: String,
      required: [true, 'productCode is required'],
      trim: true,
      uppercase: true,
      unique: true,
      match: [/^010[A-Z0-9-]*$/, 'productCode must start with 010'],
    },
    title: {
      type: String,
      required: [true, 'title is required'],
      trim: true,
      maxlength: [150, 'title can not be more than 150 characters'],
    },
    author: {
      type: String,
      required: [true, 'author is required'],
      trim: true,
      maxlength: [100, 'author can not be more than 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
      min: [0, 'price must be a positive number'],
    },
    category: {
      type: String,
      trim: true,
      default: 'General',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Book', bookSchema)
