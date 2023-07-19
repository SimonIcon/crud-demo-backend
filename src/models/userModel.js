
const mongoose = require('mongoose')
// creating a schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "user name is required"],
    },
    userEmail: {
        type: String,
        required: [true, 'userEmail is required']
    },
    origin: {
        type: String,
        required: [true, 'native country required'],
        default: "kenya",
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: [true, "password required"]
    },
    date: {
        type: String,
        default: Date.now
    },

})
// creating user model
const UserModel = mongoose.model('users', userSchema)
module.exports = UserModel;