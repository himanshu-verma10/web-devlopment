const fs= require('fs'); 
const path= require('path');
const notespath= path.resolve('notes.txt');
let text=" "
for(let i=0; i<10000; i++){
    text += "line" + i;
}
fs.writeFileSync(notespath,text);
const outputspath= path.resolve('output.txt');
const createStream= fs.createWriteStream(outputspath);
createStream.write("/n first line");
createStream.end("/n Second line");

createStream.on("finish",()=>{
    console.log("finised");
    
});
