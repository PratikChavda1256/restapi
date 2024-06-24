const {getUser} = require('../controllers/userController')
const { validateTokenAndAuth } = require('../middlewares/validateTokenHandler')
const router = require('express').Router()

router.get('/:id', validateTokenAndAuth, getUser)

module.exports = router