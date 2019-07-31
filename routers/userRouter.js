const express = require('express')
const router = express.Router()
const User = require('../controllers/userController')

router.get('/', User.showAll)
router.get('/register', User.register)
router.post('/register', User.create)

module.exports = router