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
app.get('/', function(req, res) {
    res.render('index');
});


app.get('/cep', function(req, res) {
    res.render('cep');
});

app.get('/dashboard', function(req, res) {
    res.render('dashboard');
});

app.get('/doubts', function(req, res) {
    res.render('doubts');
});

app.post('/tracking', function(req, res) {

    let codRastreio = req.body.dados; 
    console.log(codRastreio); // use -> app.use(express. urlencoded());

    rastrearEncomendas([codRastreio]).then(response => {
        console.log(response[0]);
        res.render("tracking", {response: response[0]}); //use redis for save code tracking
    });

});

app.get('/login', function(req, res) {
    res.render('login');
})

app.get('/profile', function(req, res) {
    res.render('profile');
})

app.get('/register', function(req, res) {
    res.render('register');
})

app.get('/terms', function(req, res) {
    res.render('terms');
});

app.listen(3000, function(erro) {
    if (erro) console.log('ocorreu um erro!');
    else console.log('servidor iniciando com sucesso!');
});