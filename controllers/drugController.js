const Drug = require('../models/index').Drug
const converter = require('../helpers/priceConverter')

class DrugController {
    static showAll(req, res) {
        Drug.findAll()
        .then(data => {
            // res.send(data)
            res.render('drugs', {data, converter})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static add(req, res) {
        res.render('adddrug')
    }

    static create(req, res) {
        Drug.create(req.body)
        .then(data => {
            res.redirect('/')
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
            res.redirect('/drug')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static edit(req, res) {
         Drug.findByPk(req.params.id)
         .then(data => {
            //  res.send(data)
             res.render('editDrug', {data})
         })
         .catch(err => {
             res.send(err)
         })
    }

    static update(req, res) {
        Drug.update(req.body, {where: {id:req.params.id}})
        .then(data => {
            res.redirect('/Drug')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = DrugController