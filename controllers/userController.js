const User = require('../models/index').User

class UserController {
    static showAll(req, res) {
        User.findAll()
        .then(data => {
            res,send(data)
            // res.render('userlist', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static register(req, res) {
        res.render('register')
    }

    static create(req, res) {
        User.create(req.body)
        .then(data => {
            res.redirect('/home')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = UserController