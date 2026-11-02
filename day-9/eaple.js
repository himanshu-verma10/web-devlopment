//const fs= require('fs'); 
//const path= require('path');
//import{createReadStream,createWriteStream}= require "fs";
//import path from "path";
//const inputFilePath= path.resolve("input.txt");
//const outputFilePath= path.resolve("output.txt");

//const readableStream=fs.createReadStream(inputFilePath,{encoding:'utf-8',highWaterMark: 16})// highwaterMark for sie of chunks
//const writeableStream=fs.createWriteStream(outputFilePath);

//readableStream.pipe(writeableStream);
//readableStream.on("error",(err)=> console.error("error",err));
//writeableStream.on("error",(err)=> console.error("error",err));  

//fs.createReadableStream = Data,end,error 
//fs.createWriteableStream = finish,error= write(),end()
//
import {createReadStream, createWriteStream} from "fs";
import path from "path";

const inputFilePath = path.join(import.meta.dirname, "input.txt");
const outputFilePath = path.join(import.meta.dirname, "output.txt");

const readableStream = createReadStream(inputFilePath, { highWaterMark: 16});

const writableStream = createWriteStream(outputFilePath);

readableStream.on("data", (chunk) => {
    console.log("Received a chunk:");
    console.log(chunk);

    console.log("Buffer converted to text:");
    console.log(chunk.toString());

    // Write the chunk to another file
    writableStream.write(chunk);
});

// Handle end of reading
readableStream.on("end", () => {
    writableStream.end();
    console.log("Reading completed!");
});

// Handle errors
readableStream.on("error", (err) => {
    console.log("Error:", err.message);
});

writableStream.on("error", (err) => {
    console.log("Error:", err.message);
});

writableStream.on("finish", () => {
    console.log("File copied successfully!");
});