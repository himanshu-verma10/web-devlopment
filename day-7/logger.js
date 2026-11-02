// modules used: fs, path, event 
const fs= require('fs'); // fs module
const path= require('path'); // path module
const events= require('events'); // event module
const { log } = require('console'); // emitter
const EventEmitter= new events(); // filepath
const logpath= path.resolve('app.log');

EventEmitter.on('log',(a)=> {
    const date= new Date();
    const logtext="[" + date.toISOString() + "]" + a;
    fs.appendFile(logpath,logtext,(err)=>{
        if(err) 
        console.log(err);
    });
    //console.log(logtext); 
});
EventEmitter.emit('log','hello');

