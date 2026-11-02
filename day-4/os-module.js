//os-module.js gives all information related to os 
const os = require('os');

console.log(os.platform());          // win32, linux, darwin
console.log(os.arch());              // architecture
console.log(os.cpus().length);       // no. of cpu's
console.log(os.totalmem() / 1024 / 1024 / 1024, 'GB'); // totalmemory divided into 3 times for gigabite
console.log(os.freemem() / 1024 / 1024 / 1024, 'GB'); // free memory
console.log(os.homedir()); 
console.log(os.uptime());