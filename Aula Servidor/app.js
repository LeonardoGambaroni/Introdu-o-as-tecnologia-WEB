// estas 3 linhas são referencias aos pacotes que vamos usar
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// porta de funcionamento para nosso servidor
// node http (servidor web - servicos...)
// const = constante
// a porta do servidor nunca muda
const port = 3000;


// definindo que o nosso servidor é uma aplicacao
//em JavaScript usando o pacote express
const serverApp = express();

// definir no nosso servidor alguns padroes.
// Nosso servidor receberá requisições no formato JSON
// e poderá devolver respostas em formato JSON
serverApp.use(bodyParser.json());

//Nosso servidor aceitará requisições HTTP de qualquer lugar
serverApp.use(cors());  

// um servidor possui ROTAS.
// CADA ROTA, representa um servico
// que o servidor faz, ou pode ser um arquivo.
// Servidor = serve (rotas ou paginas)
serverApp.get('/', (req,res)=>{
    // implementar o que o servidor vai fazer
    // quando o cliente acessar, por exemplo
    // hhtp://ip_do_servidor:3000/
    res.send('Você esta no servidor do Leonardo Gambaroni Alves');
});

serverApp.get('/numeroPi', (req,res)=>{
    res.send("3.1415");
});

// implementar o start do servidor.
// colocar o servidor para funcionar (de pé)
serverApp.listen(port);

