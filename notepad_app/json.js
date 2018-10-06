var obj = {
    name: 'shreyanshStringify'
};
var stringObj = JSON.stringify(obj);
console.log(typeof(stringObj),stringObj);

var personStr = '{"name":"shreyanshParsing"}';
var obj2 = JSON.parse(personStr);
console.log(typeof(obj2),obj2);


// const fs = require('fs')

// var realNote = {
//      Title : "",
//      Body : ""
//  };
//  var realNoteStr = JSON.stringify(realNote)

//  fs.writeFileSync('notes.json',realNoteStr)     // writing STRING into the file
//  var noteString = fs.readFileSync('notes.json')
//  console.log(typeof(noteString),':',noteString)

//  var noteObj = JSON.parse(noteString)
//  console.log(typeof(noteObj),':',noteObj)