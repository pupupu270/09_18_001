



let websocket = require("ws");
let server = new websocket.Server({port: 3000});




server.on("connection", (socket) => {

    console.log("connection");
   
});




let http = require("http");
let fs = require("fs");



http.createServer((req, res) => {


                      res.writeHead(200,{Content-Type:"text/html"});
    res.write(
"<html>
        <head></head>
        <body>test</body>
        </html>"
        
    );
res.end();

  

}).listen();

console.log("ok");



