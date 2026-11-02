const {add, substract} = require('./math');

console.log(process.argv[2]);
let [first,second]=[process.argv[2],process.argv[3]]
console.log(add(first,second));


