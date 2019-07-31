const User = require('../models/index').User

class UserController {
    static showAll(req, res) {
        User.findAll()
        .then(data => {
            // res.send(data)
            res.render('user', {data})
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
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delete(req, res) {
        User.destroy({
            where: {id: req.params.id}
        })
        .then(data => {
            res.redirect('/user')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static edit(req, res) {
        res.render('editUser')
    }

    static update(req, res) {
        User.update(req.body, {where: {id:req.params.id}})
        .then(data => {
            res.redirect('/user')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = UserController