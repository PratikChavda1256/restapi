const { validateToken } = require('../middlewares/validateTokenHandler')
const router = require('express').Router()
const { addItemToCart, getCart, decreaseQuantity, removeItem, deleteCart, updateCartItemQuantity } = require('../controllers/cartController')

router.post('/', validateToken, addItemToCart)

router.get('/get-cart', validateToken, getCart)

router.post('/decrease-quantity', validateToken, decreaseQuantity)

router.post('/remove-cart-item', validateToken, removeItem)

router.post('/update-cart-item-quantity', validateToken, updateCartItemQuantity)

// router.put('/empty-cart', validateToken, deleteCart)

router.delete('/delete-cart', validateToken, deleteCart)

module.exports = router