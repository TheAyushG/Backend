const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ //here we define what are the properties of users we are using in this schema
    username: String,
    email: String,
    ppassword: String,
})


const userModel = mongoose.model('user', userSchema) //implementing the user schema in the database 


module.exports = userModel