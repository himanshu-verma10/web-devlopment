// node js is a runtime environment, its not a framework or not a language
console.log ("Hello, your name");

const fs = require('fs');

// Read file asynchronously
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file: ' + err);
    return;
  }
  console.log('File content: ' + data);
});

console.log('Reading file... (this runs first!)')


require()
module.export