var Cookies = require('cookies')
var keys = ['keyboard cat']

const models = require('../../../models/models')

module.exports = {

    getAll: function (req, res, next) {
        models.City.findAll()
            .then(items => {
                res.json(items)
            })
    },
    getOne: function (req, res, next) {
        models.City.findOne({
            where: {
                id: req.params.id
            }
        }).then(data => {
            // Create a cookies object
            var cookies = new Cookies(req, res, { keys: keys })

            
            cookies.set('city', data.dataValues.alias, { signed: true })
            
            res.json('ok')

        })
            .catch(err =>
                res.json(err)
            )
    }
}