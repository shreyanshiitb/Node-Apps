var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public'))
app.set('view engine','ejs')

app.get('/:id',function(req,res){

var   
	[luckMax,hardMax] = req.params.id.split(',').map(Number),
	maximum = hardMax ? hardMax : luckMax/40,
	minimum = 30,
    prizeMoney   = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum,
    tokenNo = new Date().getTime();
	res.render('index',{"prize":prizeMoney,"tokenNo":tokenNo})
})

app.post('/saveToken',function(req,res){
	var objBody = {
			"Customer_name" : req.body.custName,
			"token" : req.body.token,
			"amount": req.body.prize },
		headers = {
			"x-apikey" : "5d08b2ed52556062830a4551",
		    "Content-Type" : "application/json" },
	    options = {
			url: 'https://scratch-4063.restdb.io/rest/tokens',
			method: 'POST',
			headers: headers,
			body: objBody,
			json: true
	};

	request.post(options, function (error, response, body) {
	        if (!error && response.statusCode == 201) {
	            console.log(body);
	        }
	    }
	);
	res.send(`you sent ${req.body.token} as token to be saved`)
})

app.listen(process.env.PORT || 8583,function(){
	console.log('Node app started at port 8583')
})
