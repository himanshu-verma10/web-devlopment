// file System js:- Read, Write, Append, Unlink, Rename 
const fs = require('fs');
const path = require('path');
const notespath= path.resolve('notes.txt'); //path.resolve use for c drie

// # Read file() #
//fs.readFile(notespath,'utf8',(err, data) => {   //async
//   if(err){console.log(err);
//  }
//  console.log(data);
//}); 

//const data= fs.readFileSync(notespath,'utf8');
//console.log("this will run");

//const notedata= fs.readFileSync(notespath,'utf8');  //sync
//console.log(notedata);

// # Write File() #
//fs.writeFile(notespath,'This is write',(err)=> {   //async
//if(err){console.log(err);
// }});

//fs.writeFileSync(notespath,'This is syncwrite');   //sync

// # Append File() /update #
//fs.appendFile(notespath,'This is write async',(err)=> {   //async
//  if(err){console.log(err);
// }});

//fs.appendFileSync(notespath,'This is syncwrite');   //sync

// # Unlink File() /delete #
//fs.unlink(notespath,(err)=> {   //async
 //if(err){console.log(err);
 //}});

//fs.unlinkSync(notespath);    //sync

// # Rename File() #
fs.rename(notespath,'notes2.txt',(err)=>{  //async
});

//fs.renameSync(notespath,'notes2.txt');    //sync





