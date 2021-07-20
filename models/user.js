var mongoose = require('mongoose')

var Schema = mongoose.Schema

var userModelSchema = new Schema({
    name: String,
})
  
module.exports = mongoose.model('UserModel', userModelSchema )