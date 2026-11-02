Promise.resolve().then(() => console.log("A")); // call back func.
Promise.resolve().then(() => {
process.nextTick(()=> console.log("B"));
});
console.log("F");

Promise.resolve().then(() => console.log("C"));
process.nextTick(()=> console.log("D"));
process.nextTick(()=> {
Promise.resolve().then(() => console.log("E"));
});
    
