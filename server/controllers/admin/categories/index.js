const models = require('../../../models/models')

module.exports = {

    getAll: function (req, res, next) {
        models.Category.findAll()
            .then(items => {
                res.json(items)
            })
    }
}