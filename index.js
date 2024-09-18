



let websocket = require("ws");
let server = new websocket.Server({port: 3000});




server.on("connection", (socket) => {

    console.log("connection");
   
});




let http = require("http");
let fs = require("fs");



http.createServer((req, res) => {


                      res.writeHead(200);
res.end();

  

}).listen();

console.log("ok");



