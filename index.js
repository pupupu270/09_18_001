


require("dotenv").config();

const  {Client} = require("pg");

const sql= new Client({
connectionString:process.env.CONNECTION_STRING
});
sql.connect();

sql.end();




let websocket = require("ws");
let server = new websocket.Server({port: 2001});

let client = 0;




server.on("connection", (socket) => {

    let json = {
        connection_id: client
    };
    socket.send(JSON.stringify(json));
    client++;
    



    socket.on("message", ms => {
        let a = JSON.parse(ms.toString());
        if (a.message != "")
        {
            server.clients.forEach((client) => {     
                client.send(JSON.stringify(a));
            });
        }
    });
});




let http = require("http");
let fs = require("fs");



http.createServer((req, res) => {

    if (req.url == "/")
        req.url = "/index.html";

    fs.readFile(__dirname + "/html" + req.url, (err, data) => {

        if (err == null)
        {
            res.writeHead(200);
            res.write(data);
            res.end();
        }
    });

  

}).listen(2000);

console.log("ok");



