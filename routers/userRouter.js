const express = require('express')
const router = express.Router()
const User = require('../controllers/userController')

router.get('/', User.showAll)
router.get('/register', User.register)
router.post('/register', User.create)
router.get('/delete/:id', User.delete)
router.get('/edit/:id', User.edit)
router.post('/edit/:id', User.update)
module.exports = router