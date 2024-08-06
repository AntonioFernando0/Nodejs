let http = require('http')

http.createServer(function(req, res){

    res.end("Hello World! Welcome to my website");
}).listen(8000);

console.log("Meu servidor  rodando");

