// Import library http

const http = require("http");

// Creating Server

console.log("Hello world 1");


http.createServer((req, res)=>{
    console.log("Hello world 2");
    res.end("Welcome to NodeJS server");
}).listen(4000);


console.log("Hello world 3");



