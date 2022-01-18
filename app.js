const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const campgroung = require('./models/campground')
mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))


