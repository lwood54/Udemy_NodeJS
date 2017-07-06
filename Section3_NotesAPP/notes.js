console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note...', 'Title: ', title, 'Body: ', body);
};

var removeNote = (title) => {
  console.log('Removing ', title);
};

module.exports = {
  addNote,         // identical to this: addNote: addNote
  getAll,
  getNote,
  removeNote
};
