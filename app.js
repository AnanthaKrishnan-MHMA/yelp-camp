const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const { urlencoded } = require('express')
const mongoose = require('mongoose')
const Campground = require('./models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(urlencoded({extended:true}))
app.use(methodOverride('_method'))


app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/campgrounds',async (req,res)=>{
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index',{campgrounds})
})
app.get('/campgrounds/:id',async (req,res)=>{
   const {id} = req.params
   const campground = await Campground.findById(id)
   res.render('campgrounds/show',{campground})
})
app.post('/campgrounds/:id',async (req,res)=>{
   const {id} = req.params
   const campground = await Campground.findByIdAndUpdate(id,req.body)
   res.redirect(`/campgrounds/${campground._id}`)
})
app.get('/campgrounds/:id/edit',async (req,res)=>{
    const {id} = req.params
    const campground = await Campground.findById(id)
    res.render('campgrounds/edit',{campground})
})
// app.get('/',(req,res)=>{
//     res.render('')
// })
app.listen(3000,()=>{
    console.log('listening to port 3000')
})