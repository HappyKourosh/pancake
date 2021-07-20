var express = require('express')
var router = express.Router()
var UserModel = require('../models/user.js')

router.post('/', (req, res) => {
    console.log('2')
    name = req.body.say
    var user = new UserModel({ name: name })
    user.save(function (err) {
        if (err) return handleError(err);
        // saved!
    })
    var UserInfo = [
        {name:user.name}
    ]
    console.log(UserInfo)
    res.render('index2', {
        UserInfo: UserInfo
    })
})

module.exports = router