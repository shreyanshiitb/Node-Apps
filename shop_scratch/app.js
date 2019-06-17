var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'))
app.set('view engine','ejs')

app.get('/:id',function(req,res){

var   
	[luckMax,hardMax] = req.params.id.split(',').map(Number),
	maximum = hardMax ? hardMax : luckMax/40,
	minimum = 30,
    prizeMoney   = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    console.log((maximum),minimum)
	res.render('index',{"prize":prizeMoney})
})

app.listen(process.env.PORT || 8583,function(){
	console.log('Node app started at port 8583')
})
