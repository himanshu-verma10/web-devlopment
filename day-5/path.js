const path= require("path");
const createpath= path.join(__dirname,'notes.txt');
console.log(createpath);
const resolvepath= path.resolve('notes.txt');
console.log(resolvepath);


