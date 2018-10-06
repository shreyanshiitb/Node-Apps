const express = require('express')
const hbs = require('hbs')

var app = express()

hbs.registerPartials(__dirname+'/views/partials') // to register FOOTER PARTIAL PAGE

app.set('view engine','hbs')
app.use(express.static(__dirname+'/public')) /*To autmatically set the routes to public pages.
Before sending the req to server,in the middle, things like logging, auth etc. can be done, and
this is done using express MIDDLEWARES.*/

app.use((req, res, next)=>{
    console.log('Unresponsive App\n')
    next()  /*next() lets the request go to (other middlewares/server), if not mentioned then 
               application halts at this point*/ 
})

app.get('/',(req,res)=>{
    res.send("Welcome to root!")
})

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:"About Page",
        currentYear:new Date().getFullYear() // sending an object required in ABOUT page
    })
})

app.get('/home',(req,res)=>{
    res.render('home.hbs',{
        pageTitle:"Home Page",
        currentYear:new Date().getFullYear()
    })
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})