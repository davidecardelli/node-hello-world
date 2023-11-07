// ! importo i pacchetti installati tramite npm
const http = require("http");
const dotenv = require("dotenv");

// ! lancio dotenv
dotenv.config();

// ! default 3000, ma posso impostarla anche tramite .env
port = process.env.PORT || 3000;

// ! preparo la funzione per rispondere tramite html
function htmlResponse(res, content) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
}

// ! creo il server
const server = http.createServer(function (req, res) {
    htmlResponse(res, "<h1>Hi, you are using the port " + port + "</h1>");
});

// ! lo avvio
server.listen(port, function () {
    console.log("Server attivo su: http://localhost:" + port);
});