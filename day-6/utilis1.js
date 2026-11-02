//const fs = require('fs');
//const path = require('path');
//const notespath = path.resolve('notes.txt');

//Write js
//function createNote() {

 //   fs.writeFile(notespath, 'This is create', (err) => {  //async
 //       if (err) console.log(err);
//        console.log("Inside writefile");

//    });
//}

//Read js
//function readNote() {
//    console.log("Inside read0");

//    fs.readFile(notespath, 'utf8', (err, data) => {   //async
//        if (err){
 //            console.log(err);
 //       }
 //       console.log(data);
 //       console.log("Inside Read fs");

 //   });
//}

//Append js
//function addNote() {
 //   fs.appendFile(notespath, 'This is append', (err) => {  //async
 //       if (err) console.log(err);
 //   });
//}

//Unlink js
//function deleteNote() {
    //fs.unlink(notespath, (err) => {  //async
    //    if (err) console.log(err);
    //});
//}

//module.exports = { createNote, readNote, addNote, deleteNote }; 

//corrected code

const fs = require('fs');
const path = require('path');

const notespath = path.resolve(__dirname, 'notes.txt');

// Create or overwrite the file
function createNote() {
    fs.writeFile(notespath, 'This is create\n', (err) => {
        if (err) {
            console.error('Error creating note:', err);
            return;
        }

        console.log('Note created successfully');
    });
}

// Read the file
function readNote() {
    fs.readFile(notespath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading note:', err);
            return;
        }

        console.log('Note content:', data);
    });
}

// Append content
function addNote() {
    fs.appendFile(notespath, 'This is append\n', (err) => {
        if (err) {
            console.error('Error appending note:', err);
            return;
        }

        console.log('Note appended successfully');
    });
}

// Delete the file
function deleteNote() {
    fs.unlink(notespath, (err) => {
        if (err) {
            console.error('Error deleting note:', err);
            return;
        }

        console.log('Note deleted successfully');
    });
}

module.exports = {
    createNote,
    readNote,
    addNote,
    deleteNote
};