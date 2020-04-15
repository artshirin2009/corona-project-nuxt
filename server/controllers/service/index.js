const models = require('../../models/models')
module.exports = {

    cookies: function (req, res, next) {
        models.Cookie.findAll({
            where: {
                id: 1
            }
        })
            .then(items => {
                res.json(items[0].cookie)
            })

    },

}