//buffer:- buffer is static class temporary memory that holds chunk of data,
// buffer:- bytes- small parts or chunks stores in buffer 
// stream:- flow of eeution
//buffer creation
//const textbuffer= Buffer.from("Hello");
//console.log(textbuffer);
//console.log(textbuffer.toString());

//if we not 
//const allocBuffer=Buffer.alloc(8);
//console.log(allocBuffer);
//allocBuffer.write('will');
//console.log(allocBuffer);

//console.log(textbuffer.toString());
//const { resolve } = require('dns');
const fs= require('fs'); 
const path= require('path');
const notespath= path.resolve('notes.txt');
//fs.readFile(notespath, (err, data) => {
   // if(err) console.log(err);
   // console.log(data);  
//});
const buff= Buffer.from("Hello");
console.log(buff);
console.log(buff.toString());
console.log(buff.length);
const allocBuff=Buffer.alloc(10);   //empty buffer 
console.log(allocBuff);
allocBuff.write("Elephants");
console.log(allocBuff);
