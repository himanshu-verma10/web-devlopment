// callback function is having one another function in it argument
function greetings(name,cb) {
    console.log(`${name} Hello!`);
    cb();
}
greetings("Himanshu",()=>{
    console.log("greetings print");
    
});
