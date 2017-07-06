const fs = require('fs');

// tries to fetch notes, and returns a notes array if there are notes
// if there is no file to fetch from, then return empty array
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        // takes JSON string from file anc converts to object
        return JSON.parse(notesString);
        // adds "note" object to notes array
    } catch (e) {
        return [];
    }
};

// converts object to string, then writes it to file
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// adds note to notes file
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var noteArrary = notes.filter((note) => note.title === title);
    return noteArrary[0]; // don't need to test because it will return undefined if none exists.
    // undefined is 'falsy' so my if else statement in app.js will run false if undefined
};

var removeNote = (title) => {
    // fetch the notes
    var notes = fetchNotes();
    // filter out the notes, removing the one with title of argument
    var nonRemovedNotes = notes.filter((note) => note.title !== title);
    // save new notes array
    saveNotes(nonRemovedNotes);

    return notes.length !== nonRemovedNotes.length;
};


var logNote = (note) => {
    console.log(`Title: ${note.title}, says: \n${note.body}`);
};

module.exports = {
    addNote,         // identical to this: addNote: addNote
    getAll,
    getNote,
    removeNote,
    logNote
};
