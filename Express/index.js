const express = require("express")// importando o express
const app = express() // Iniciando o express

app.get("/", function(req, res){
    res.send("Bem vindo ao meu site!")

}); // Criando uma rota

app.get("/blog/:artigo?", function(req, res)// QUANDO QUISER COLOCAR UM PARAMENTRO OPCIONAL
{

    let artigo = req.params.artigo
    if(artigo){
        res.send("<h2> Artigo: " + artigo + " </h2>")

    }else{
        res.send("Bem vindo ao meu Blog!")

    }
    
})

app.get("/canal/youtube",function(req, res){

    let canal = req.query["canal"]
    if(canal){
        res.send(canal)
    }else{ res.send("Nenhum canal fornecido!")

    }
   
})

app.get("/ola/:nome/:empresa", function(req, res){

    // REQ => DADOS ENVIADOS PELO USUÁRIO
    // RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send("<h1>Oi "  +  nome  + " do " + empresa + " </h1>");
})

app.listen(4000, function(erro){
    if(erro){

        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso")
    }
})