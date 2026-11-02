const os= require('os');
console.log(os.platform());
console.log(os.arch());              // architecture
console.log(os.cpus().length);       // no. of cpu's
console.log(os.totalmem() / 1024 / 1024 / 1024, 'GB'); // totalmemory divided into 3 times for gigabite
console.log(os.freemem() / 1024 / 1024 / 1024, 'GB'); // free memory
console.log(os.uptime());