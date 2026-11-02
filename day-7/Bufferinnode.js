// Buffers in Node.js are used to store binary data directly in memory. 
//small parts or chunks handling node Buffers in Node.js are used to store binary data directly in memory. 
// They are very useful when working with files, streams, images, videos, or network data where normal strings are not enough.


// ** Methods of buffer module **
//1. alloc() Method: It creates a Buffer object of the given length.
let buff= new Buffer.alloc(5);
console.log(buff);

//2. equals() Method: It compares two buffer objects. Returns true if the object match else returns false.
//let name1= new Buffer.alloc(4, "Name");
//let name2= new Buffer.alloc(6, "Name");
//console.log(new Buffer.from(name1).equals(name2));

//3. copy() Method: It copies the given number of bytes of a buffer object.
let buff1= new Buffer.alloc(5, "Names");
let name3= new Buffer.alloc(5, "hello");
buff.copy(name3);
console.log(name3.toString());

