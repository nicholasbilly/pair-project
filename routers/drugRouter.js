const express = require('express')
const router = express.Router()
const Drug = require('../controllers/DrugController')

router.get('/', Drug.showAll)
router.get('/add', Drug.add)
router.post('/add', Drug.create)
router.get('/delete/:id', Drug.delete)
router.get('/edit/:id', Drug.edit)
router.post('/edit/:id', Drug.update)

module.exports = router