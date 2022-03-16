const express = require('express');
// const loginmodel = require('../model/logmodel.js')
const registermodel = require('../controller/controller.js')
const { body, validationResult } = require('express-validator');
const router = express.Router();

router.post('/test', (req, res) =>
{
    res.send('testing');
})
router.post('/signup', body('name').isLength({ min: 3 }), body('email').isEmail(), body("password")
    .isString()
    .isLength({ min: 8 })
    .not()
    .isLowercase()
    .not()
    .isUppercase()
    .not()
    .isNumeric()
    .not()
    .isAlpha(), registermodel.register);
// router.post('/login', loginmodel);
module.exports = router