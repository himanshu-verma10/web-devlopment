const fs= require('fs'); 
const path= require('path');
const notespath= path.resolve('notes.txt');
const outputpath= path.resolve('output.txt');
let reader= fs.createReadStream(notespath);
let writer= fs.createWriteStream(outputpath);
reader.pipe(writer);
writer.on("finish",()=>{
    console.log("finised");
 });
