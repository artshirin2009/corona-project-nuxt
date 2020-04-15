const models = require('../../../models/models')

module.exports = {

    getAll: function (req, res, next) {
        models.Category.findAll()
            .then(items => {
                res.json(items)
            })
    },
    getByCityId: function (req, res, next) {
        models.City.findOne({
            where: {
                alias: req.params.alias
            }
        })
            .then(result => {
                if (result !== null) {
                    return models.Category.findAll({
                        where: {
                            cityId: result.id
                        }
                    })
                }
                else {
                    return models.Category.findAll()
                }
                
            })

            .then(items => {
                res.json(items)
            })
    },
}