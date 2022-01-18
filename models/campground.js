const mongoose = require('mongoose');
const campgroung = require('./models/campground')
mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const campgroundSchema = new mongoose.Schema({
    
})