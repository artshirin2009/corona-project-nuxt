const models = require('../../../models/models')

module.exports = {

    getAll: function (req, res, next) {
        models.City.findAll()
            .then(items => {
                res.json(items)
            })
    }
}