const express = require('express'); // importando o express
const app = express(); //iniciando o express
const bodyParser = require('body-parser');
// const Tracking = require('./views/partials/tracking/tracking');
const { Result } = require('postcss');

const { rastrearEncomendas } = require('correios-brasil');

// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
// app.set(express.static(path.join(__dirname, 'public')));
app.use('/public/', express.static('public'));

app.use(express. urlencoded()); //the parse of body at formart url encoded

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//routes

app.post('/dados', function(req, res) {

    let codRastreio = req.body.dados; 
    console.log(codRastreio); // use -> app.use(express. urlencoded());

    rastrearEncomendas([codRastreio]).then(response => {
        console.log(response[0]);
        res.render("tracking", {response: response}); //use redis for save code tracking
    });

});

// app.get('/dados', function(req, res) {

//     var codigo = req.body.tracking;

//     console.log(codigo)

// });


app.get('/', function(req, res) {
    res.render('index');
});

app.get('/login', function(req, res) {
    res.render('login');
})

app.get('/dashboard', function(req, res) {
    res.render('dashboard');
})

app.get('/tracking', function(req, res) {
    res.render('tracking');
});

app.listen(3000, function(erro) {
    if (erro) console.log('ocorreu um erro!');
    else console.log('servidor iniciando com sucesso!');
});


//RASCUNHO
// app.post('/dados', function(req, res) {
   

//     rastreio = new rastrearEncomendas(rast);
//     //track order
//     rastreio.then((response) => {
//         if (response == undefined) {
//             const result = response[0].eventos.reverse();
//             result.forEach(item => {
//                 var codigo = item.codigo;
//                 var descricao = item.descricao;
//                 var dtHrCriado = item.dtHrCriado;
//                 var tipo = item.tipo;
//                 var unidade = item.unidade;
//                 var urlIcone = item.urlIcone;
//                 console.log(result);
//                 res.json({ message: 'ok', rast, result });
//             });
//         } else {
//             res.redirect('/');
//         }
//     });
// });


// let codRastreio = ['OU341933668BR', 'LB290784401HK']; // array de códigos de rastreios

// rastrearEncomendas(codRastreio).then(response => {
//   console.log(response[0].eventos.reverse());
//   // O reverse é apenas para organizarmos os dados do rastreio do mais antigo para o mais recente !
// });

// app.post('/', urlencodedParser, (req, res) => {
//     response = {
//         tracking: req.body.tracking
//     };

//     res.end(JSON.stringify(response));

// });
