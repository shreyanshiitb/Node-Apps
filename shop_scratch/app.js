var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine','ejs')

app.get('/',function(req,res){
	res.render('index')
})

app.listen(process.env.PORT || 8586,function(){
	console.log('Node app started at port 8586')
})
