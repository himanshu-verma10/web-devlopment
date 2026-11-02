console.log(__dirname); //folder path of current file
console.log(__filename); //full file path 
console.log(process.argv);
console.log(process.env.PORT); // environment
setTimeout(() => console.log('after 2s'),2000);
const id= setInterval(()  => console.log('tick'),1000);
setTimeout(() => clearInterval(id), 4000);

