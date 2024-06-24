const { getProducts, getProduct, createProduct, updateProduct, deleteProduct, addToWishlist, rating } = require('../controllers/productController')
const router = require('express').Router()

router.get('/', getProducts)

router.get('/:id', getProduct)

module.exports = router