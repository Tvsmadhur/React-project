const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const products = require('./router/router.js')

const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', products)
app.listen(port, () =>
{
    console.log('server is running');
})
