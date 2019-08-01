const express = require('express')
const router = express.Router()
const Drug = require('../controllers/drugController')
const authenLogin = require('../helpers/middleware')

router.get('/', authenLogin, Drug.showAll)
router.get('/add', authenLogin, Drug.add)
router.post('/add', authenLogin, Drug.create)
router.get('/delete/:id', authenLogin, Drug.delete)
router.get('/edit/:id', authenLogin, Drug.edit)
router.post('/edit/:id', authenLogin, Drug.update)

module.exports = router