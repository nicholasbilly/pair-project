const express = require('express')
const router = express.Router()
const User = require('../controllers/userController')

router.get('/', User.showAll)
router.get('/register', User.register)
router.post('/register', User.create)
router.get('/delete/:id', User.delete)
router.get('/edit/:id', User.edit)
router.post('/edit/:id', User.update)
router.get('/:id/buy', User.buyDrug)
router.post('/:id/buy', User.createTransaction)


module.exports = router