const Drug = require('../models/index').Drug

class DrugController {
    static showAll(req, res) {
        Drug.findAll()
        .then(data => {
            // res.render('druglist', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static add(req, res) {
        // res.render('drugAdd')
    }

    static create(req, res) {
        Drug.create(req.body)
        .then(data => {
            // res.redirect('/home')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delete(req, res) {
        Drug.destroy({
            where: {id: req.params.id}
        })
        .then(data => {
            // res.redirect('/drug')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static edit(req, res) {
        // res.render('editDrug')
    }

    static update(req, res) {
        Drug.update(req.body, {where: {id:req.params.id}})
        .then(data => {
            // res.redirect('/Drug')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = DrugController