//fs-module.js
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'notes.txt');

 /* Read File sync and async */
// Async (callback)
fs.readFile(file, 'utf8', (err, data) => {
  if (err) return console.error('Error:', err.message);
  console.log(data);
});
console.log("After async");

// Sync
const data = fs.readFileSync(file, 'utf8');
console.log(data);


console.log('This prints first!'); //wrong

 /* Write File sync and async */

fs.writeFileSync('output.txt', 'Hello from Node!');      // creates or OVERWRITES
fs.appendFileSync('output.txt', '\nSecond line');         // adds to the end

fs.writeFile('async.txt', 'Async write', (err) => {
  if (err) throw err;
  console.log('File written');
});
fs.appendFile('async.txt', 'Async Append', (err) =>{
  if (err) throw err;
  console.log("Appended");
  
})

 /* Rename File sync and async */
fs.renameSync('output.txt', 'renamed.txt');
fs.rename('async.txt','async-renamed.txt', (err)=>{
  if(err) throw err;
  console.log("Renamed");
});

fs.unlinkSync('renamed.txt');                 // delete a file
fs.unlink('notes.txt', (err)=>{
  if(err) throw err;
  console.log("unlined");
  
});                 // delete a file
console.log(fs.existsSync('notes.txt'));      // true or false


 /* create Folder sync and async */
fs.mkdirSync('logs');                         // create folder
fs.writeFileSync('logs/app.log', 'started');
console.log(fs.readdirSync('logs'));          // list contents
fs.rmSync('logs', { recursive: true });       // delete folder and contents