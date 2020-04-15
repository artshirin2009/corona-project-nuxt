var Cookies = require('cookies')
var keys = ['keyboard cat']
//const jsonwebtoken = require('jsonwebtoken')
module.exports = {

    register: function (req, res, next) {

    },
    login: function (req, res, next) {
        console.log(req.body)
        const email = req.body.email
        const accessToken = email


        var cookies = new Cookies(req, res, { keys: keys });
        cookies.set('token', new Date().toISOString(), { signed: true })

        res.json({ token: accessToken })
    },
    logout: function (req, res, next) {

    }
}