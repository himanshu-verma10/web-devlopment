//path-module.js
// There are two ways to make path 1)path.join(__dirname,"notes.txt"); 2)path.resole ("notes.txt")
const path = require('path');

console.log(path.join(__dirname, 'files', 'a.txt')); // joins safely
console.log(path.resolve('files', 'a.txt'));         // absolute path
console.log(path.basename(__filename));              // app.js
console.log(path.dirname(__filename));               // folder
console.log(path.extname('photo.png'));              // .png extension name
console.log(path.parse('/home/user/notes.txt'));     // object with root, dir, base, ext, name


