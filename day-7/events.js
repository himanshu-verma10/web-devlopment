//There are three types in event module:- .on() use for register the event,
// .emit() use for triggering the event,
// .once() it registers event multiple times but triggers the event once ,it trigger the event only one time 
const events= require('events');
const EventEmitter= new events();
//event register
 EventEmitter.on('click',()=> {
    console.log("user logged in");
    console.log("user login");
 }),
 EventEmitter.emit('click');

 EventEmitter.once('login',()=> {
    console.log("user logged in");
     console.log("user login");
 }),

 EventEmitter.on('login',(a,b)=> {
    console.log("user logged in");
 }),
 EventEmitter.emit('login','rahul');

 