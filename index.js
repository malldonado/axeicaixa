const express = require('express'); // importando o express
const app = express(); //iniciando o express
const path = require('path');
const {consultarCep, calcularPrecoPrazo, rastrearEncomendas} = require('correios-brasil');

// Cep pode ser String ou Number
const cep = '13470240'; 

let args = {
    // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
    sCepOrigem: '81200100',
    sCepDestino: '21770200',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '20',
    nVlLargura: '20',
    nCdServico: ['04014', '04510'], //Array com os códigos de serviço
    nVlDiametro: '0',
};

let codRastreio = ['OU341933668BR', 'LB290784401HK'];

// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
// app.set(express.static(path.join(__dirname, 'public')));
app.use('/public/', express.static('public'));

//routes
app.get('/', function(req, res) {
    res.render('index');
});

app.get("/login",(req, res) => {
    res.render("login");
});

app.get("/register",(req, res) => {
    res.render("register");
});

app.get("/dashboard",(req, res) => {
    res.render("dashboard");
});

//api correios

//consult cep
// consultarCep(cep).then(response => {
//     console.log(response);
// });

// //calc prices and time
// calcularPrecoPrazo(args).then(response => {
//     console.log(response);
// });

rastrearEncomendas(codRastreio).then(response => {
    console.log(response);
})

//track order

app.listen(3000, function(erro) {
    if(erro) console.log('ocorreu um erro!');
    else console.log('servidor iniciando com sucesso!');
});