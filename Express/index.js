const express = require("express")// importando o express
const app = express() // Iniciando o express

app.get("/", function(req, res){
    res.send("Bem vindo ao meu site!")

}); // Criando uma rota

app.get("blog", function(req, res){
    res.send("Bem vindo ao meu Blog!")
})

app.get("/canal/youtube",function(req, res){
    res.send("Bem vindo ao meu Canal")
})
app.listen(40, function(erro){
    if(erro){

        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso")
    }
})