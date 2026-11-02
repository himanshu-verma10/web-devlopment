//Stream:- In Node.js, streams are collections of data, which might not be available in full at once and don't have to fit in memory. 

const fs= require('fs'); 
const path= require('path');
const notespath= path.resolve('notes1.txt');
const readablestream =fs.createReadStream(notespath,'utf-8');
readablestream.on("data",(data)=>{  //data
    console.log(data);
    
});
readablestream.on("error",(err)=>{  //error
    if (err)console.log(err);
    
});

readablestream.on("end",()=>{  //end
    console.log("read stream");
    
});
