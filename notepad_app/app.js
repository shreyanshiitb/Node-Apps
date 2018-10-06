console.log("starting app: app.js");

const fs = require('fs');       //filesystem access module
const _ = require('lodash')     //utility function very useful manipulation fn
const yargs = require('yargs')  //module for taking I/O from terminal

const notes = require('./notes.js');

var argv = yargs.argv;
//var command = process.argv[2]      //args from nodejs default 
var command = argv._[0]
//console.log('Command :', command)   
//console.log('Process :', process.argv)    //not an efiicient way!
//console.log('Yargs :', yargs.argv)     //args from yargs module

if(command === 'add'){
    var note = notes.addNote(argv.title,argv.body)
    if(note===undefined){console.log("note title taken")}
    else{console.log(`Note with title ${note.title} is added...!! `)}
}
else if(command === 'read'){
    var note = notes.find(argv.title)
    console.log(note[0].body)
}
else if(command === 'remove'){
    var note = notes.remove(argv.title)
    console.log('Deleted note is:\n',note[0])
}
else if(command === 'list'){
    console.log((notes.getAll()))
}
else{
    console.log('command not found')
}

