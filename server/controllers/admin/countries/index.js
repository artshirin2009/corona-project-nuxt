const models = require('../../../models/models')

module.exports = {

    getAll: function (req, res, next) {
        models.Country.findAll({
            include: [{
              all: true
            }]
          })
            .then(items => {
                res.json(items)
            })
    }
}