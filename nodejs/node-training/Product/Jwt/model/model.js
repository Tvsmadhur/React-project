const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String
        , required: true,
        unique: 'User is Already Taken'

    },
    email: {
        type: String,



        required: 'true',

    },
    password: {
        type: String,
        required: true,

    },
    token: {
        type: String
    }


})
module.exports = mongoose.model('User', User)