const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
var path = require('path');

//routs
var signup = require("./routes/signup.js")

//database setup
var mongoDB = "mongodb://localhost:27017/pancake";
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './'));

//middlewares
app.use(express.static('views/pages'))
app.use(express.urlencoded({
    extended: true
}))
app.use('/signup', signup)
app.get('/', (req, res) => {
    res.render('index')
})

//server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})