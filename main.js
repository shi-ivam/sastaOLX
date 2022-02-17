const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())
app.set('view engine','ejs')
app.use(express.static('static'))
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res) => {
    res.render('index',{page:'index'})
})

app.get('/products',(req,res) => {
    res.render('products',{page:'products'})
})

app.get('/create',(req,res) => {
    res.render('create',{page:'create'})
})
app.get('/account',(req,res) => {
    res.render('account',{page:'account'})
})

app.listen(5000,() => {
    console.log('Listening on PORT 5000')
})