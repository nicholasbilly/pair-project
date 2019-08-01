const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/index').User
const authenLogin = require('../helpers/middleware')

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req, res, next) => {
    req.session.currentUser = req.body
    User.findAll({where: {username: req.session.currentUser.username}})
    .then(user => {
        if(bcrypt.compareSync(req.body.password, user[0].password)) {
            if(user[0].role === 'Admin') {
                res.redirect('/drug')
            } else {
                res.redirect(`/user/${user[0].id}/buy`)
            }
        } else {
            res.redirect('/login')
        }
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/logout', authenLogin, (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.send(err)
        }
        else {
            res.redirect('/')
        }
    })
})

module.exports = router