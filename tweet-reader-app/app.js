const config = require('./config');
if(config.access_token =='' || config.access_token_secret=='' || config.consumer_key=='' || config.consumer_secret==''){
  console.log('Debes llenar tus llaves en el archivo config.js')
  process.exitCode = 1; 
}

const PORT = process.env.PORT || 4000;

var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
const hashtag = require('./hashtag');

const Twit = require('twit')

var io = require('socket.io')(http);
var T = new Twit(config)

console.log("Tweet listener 1.0 - Escuchando...")

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var stream = T.stream('statuses/filter', { track: hashtag })

io.on('connection', function(socket){
  io.removeAllListeners();
  console.log('Conectado!');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  stream.on('tweet', function (tweet) {
    
    var user = tweet.user;
    var usuario = user.screen_name;
    var Nombre = user.name;
    var imagen = user.profile_image_url_https;
    var contenido = tweet.text;
    // console.log("Usuario: @",usuario);
    // console.log("Nombre: ",Nombre);
    // console.log("Imagen: ",imagen);
    // console.log("Contenido: ",contenido);
    // console.log(" - - - - - - -  ");
    io.emit('chat message', tweet);

    socket.on('chat message', function(msg){
      io.emit('chat message', tweet);
    });
  
  })


});

http.listen(PORT, function(){
  console.log(`listening on *:${PORT}`);
});


