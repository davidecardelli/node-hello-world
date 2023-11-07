// ! importo i pacchetti installati tramite npm
const http = require("http");
const dotenv = require("dotenv");

// ! lancio dotenv
dotenv.config();

// ! default 3000, ma posso impostarla anche tramite .env
port = process.env.PORT || 3000;

// ! creo l'array con frasi
const phrases = [
    "Frase 1",
    "Frase 2",
    "Frase 3",
    "Frase 4",
];

// ! creo una funzione che peschi una frase random
function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

// ! preparo la funzione per rispondere tramite html
function htmlResponse(res, content) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
}

// ! creo il server
const server = http.createServer(function (req, res) {
    const randomPhrase = getRandomPhrase();
    htmlResponse(res, "<h1>" + randomPhrase + "</h1>");
});
// ! lo avvio
server.listen(port, function () {
    console.log("Server attivo su: http://localhost:" + port);
});