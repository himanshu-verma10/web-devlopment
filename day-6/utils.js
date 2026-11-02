const fs = require('fs');
//const { builtinModules } = require('module');
const path = require('path');

//  write node
function addNote(notespath, note){
     // write file
   fs.writeFile(notespath, note, (err)=> {   //async
   if(err){console.log(err)};
    });

    //fs.writeFile(notespath, note); //sync
}

function createNote(notespath, note){
     // append file
   //fs.appendFile(notespath, note, (err)=> {   //async
   //if(err){console.log(err)};
    //});

    //fs.appendFile(notespath, note);  //sync
}

function readNote(notespath, note){
    // read file
   //fs.readFile(notespath, 'utf-8', (err,data)=> {   //async
   //if(err){console.log(err)};
  // console.log(data);
  //});

    //const data= fs.readFileSync(notespath,'utf8');  //sync
   //console.log(data);
}

function deleteNote(notespath){
    // unlink file
    fs.unlinkFile(notespath, (err)=> {   //async
   if(err){console.log(err)};
    });

    //fs.unlinkSync(notespath);    //sync
}



module.exports ={
 addNote, createNote, readNote, deleteNote
}
