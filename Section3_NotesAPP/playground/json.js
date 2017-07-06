// // converting an object into a string
// var obj = {
//   name: 'Logan'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log("obj is of type: ", typeof obj);
// console.log("after stringify, it is of type: ", typeof stringObj);
// console.log(stringObj);
//
//
// // converting a string into an object
// var personString = '{"name":"Logan", "age":"35"}';
// var person = JSON.parse(personString);
// console.log("person is of type: ", typeof person);
// console.log(person);


// storing a JSON string in a file, then reading that file
const fs = require('fs');

var originalNote = {
  title: 'Some Title',
  body: 'Some Body'
};

// take originalNote and make a variable called originalNoteString and set it = to the JSON data above
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// take string and convert it back into an object, call that variable note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
console.log(note.body);

// then test this
