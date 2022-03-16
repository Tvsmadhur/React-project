const User = require('../model/model.js')
const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
require('dotenv').config();
mongoose.connect('mongodb://127.0.0.1:27017/ias').then((res) =>
{
    console.log('db connected')
}).catch((error) =>
{
    console.log('error')
})
exports.register = async function (req, res)
{

    const { username, email, password } = req.body
    if (username == '' || email == '' || password == '') {
        res.status(400).json({ message: "Please Fill All The Details" })
    }
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    const exist = await User.findOne({ username: req.body.username })
    if (exist) {
        console.log(exist)
        return res.status(400).json({ message: "User Already Taken" })
    }


    const salt = await bcrypt.genSalt(10);

    let user = new User({
        username: req.body.username,
        email: req.body.email,



    })
    user.password = await bcrypt.hash(req.body.password, salt)




    user.save((error) =>
    {
        if (error) {
            return error;
        }


        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.Token,
            {
                expiresIn: "2h",
            }
        );
        user.token = token
        console.log(user);
        res.json({
            status: true,
            meassage: "User Registered Succesfully",
            data: user
        })



    });
}