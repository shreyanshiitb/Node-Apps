var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public'))
app.set('view engine','ejs')

app.post('/saveToken',function(req,res){
	var objBody = {
			"Customer_name" : req.body.custName,
			"token" : req.body.token,
			"amount": req.body.prize },
		headers = {
			"x-apikey" : "######",
		    "Content-Type" : "application/json" },
	    options = {
			url: 'https://scratch-4063.restdb.io/rest/tokens',
			method: 'POST',
			headers: headers,
			body: objBody,
			json: true
	};

	request(options, function (error, response, body) {
	        if (!error && response.statusCode == 201) {
				res.redirect('/listToken')
	    }
	})
});

app.get('/listToken',function(req,res){
	var options = {
		url: 'https://scratch-4063.restdb.io/rest/tokens',
		headers: {
			"x-apikey" : "######",
			"Content-Type" : "application/json" }
	}
	request.get(options, function(error, response, data){
		data = JSON.parse(data);
		if (!error && response.statusCode == 200) {
			res.render('entries',{"data":data})
		}
	})
})

app.post('/redeem',function(req,res){
	var objBody = { "token" : req.body.token }
		headers = {
			"x-apikey" : "######",
		    "Content-Type" : "application/json" },
	    options = {
			url: `https://scratch-4063.restdb.io/rest/tokens/*?q=${JSON.stringify(objBody)}`,
			method: 'DELETE',
			headers: headers,
			json: true
	};
	request(options, function (error, response, body) {
			console.log(response.statusCode )
	        if (!error && response.statusCode == 200) {
				res.redirect('/listToken')
	    }
	})
});

app.get('/:id',function(req,res){

	var   
		[luckMax,hardMax] = req.params.id.split(',').map(Number),
		maximum = hardMax ? hardMax : luckMax/40,
		minimum = 30,
		prizeMoney   = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum,
		tokenNo = new Date().getTime();
		res.render('index',{"prize":prizeMoney,"tokenNo":tokenNo})
	});

app.listen(process.env.PORT || 8583,function(){
	console.log('Node app started at port 8583')
})
