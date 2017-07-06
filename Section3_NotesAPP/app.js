const fs = require('fs');
// const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// title and body option variables
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't' // this allows you to run -t= in the command line instead of --title=
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b' // now we can use -b= instead of --body=
};

// this is equivalent to chaining them horizontally like: yargs.command().help().argv
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv; // remember, this started as yargs.argv
var command = argv._[0];
// console.log(argv._); // REMEMBER => argv._ is the variable that stores an array that the is found in the argv object
// it just happens to also be _ like lodash, but we are not calling lodash in the argv._ instance.
if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
      console.log('Note added.');
      notes.logNote(note);
  } else {
      console.log('Note with title already exists.');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
      notes.logNote(note);
  } else {
      console.log('no note by that title');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}else {
  console.log('Command not recognized');
}
