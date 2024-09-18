



let websocket = require("ws");
let server = new websocket.Server({port: 3000});




server.on("connection", (socket) => {

    console.log("connection");
   
});




let http = require("http");
let fs = require("fs");



http.createServer((req, res) => {

    if (req.url == "/")
        req.url = "/index.html";

    fs.readFile(__dirname +　req.url, (err, data) => {

        if (err == null)
        {
            res.writeHead(200);
            res.write(data);
            res.end();
        }
    });

  

}).listen();

console.log("ok");



