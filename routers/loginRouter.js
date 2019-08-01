const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/index').User

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req, res, next) => {
    req.session.currentUser = req.body
    User.findAll({where: {username: req.session.currentUser.username}})
    .then(user => {
        if(bcrypt.compareSync(req.body.password, user[0].password)) {
            if(user.role === 'admin') {
                res.redirect('/user/admin')
            } else {
                res.redirect('/user/customer')
            }
        } else {
            res.redirect('/login')
        }
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router