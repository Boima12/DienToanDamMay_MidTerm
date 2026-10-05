const VAT_RATE = (Number(process.env.MSSV_LAST_DIGIT || 0) + 5) / 100
const PRODUCT_PREFIX = process.env.PRODUCT_CODE_PREFIX || '010'

const prepareBookData = ({ productCode, title, author, price, category }) => {
  const normalizedCode = String(productCode || '').trim().toUpperCase()
  if (!normalizedCode.startsWith(PRODUCT_PREFIX)) {
    const error = new Error(`productCode must start with ${PRODUCT_PREFIX}`)
    error.statusCode = 400
    throw error
  }

  const numericPrice = Number(price)
  if (!Number.isFinite(numericPrice) || numericPrice < 0) {
    const error = new Error('price must be a non-negative number')
    error.statusCode = 400
    throw error
  }

  return {
    productCode: normalizedCode,
    title,
    author,
    price: numericPrice,
    priceAfterVat: Number((numericPrice * (1 + VAT_RATE)).toFixed(2)),
    category,
  }
}

module.exports = {
  VAT_RATE,
  PRODUCT_PREFIX,
  prepareBookData,
}
