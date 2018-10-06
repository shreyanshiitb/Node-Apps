console.log("starting app: Notes.js");
const fs = require('fs')

var fetchNotes = () => {
    try{
        var noteString = fs.readFileSync('notes.json')
        return JSON.parse(noteString)
        }
    catch(e){
        return []
        }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

var addNote = (title,body) => {
    var notes = fetchNotes()
    var note = {title,body}
    var duplicate = notes.filter((x) => x.title === title)
    if(duplicate.length === 0)
    {
        notes.push(note)
        saveNotes(notes)
        return note
    }
};

var getAll = () => {
    return JSON.stringify(fetchNotes())
}

var remove = (title) => {
    var notes = fetchNotes()
    var filteredNotes = notes.filter((x) => x.title !== title)
    saveNotes(filteredNotes)
    return notes.filter((x) => x.title === title)
}

var find = (title) => {
    var notes = fetchNotes()
    var note = notes.filter((x) => x.title === title)
    return note
}

module.exports = {
    addNote,
    getAll,
    remove,
    find
};