const express = require('express'); // importando o express
const app = express(); //iniciando o express
const bodyParser = require('body-parser');
const Tracking = require('./views/partials/process/Tracking');
const { Result } = require('postcss');

const { rastrearEncomendas } = require('correios-brasil');

// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
// app.set(express.static(path.join(__dirname, 'public')));
app.use('/public/', express.static('public'));

var urlencodedParser = bodyParser.urlencoded({extended: false});

//routes

app.get('/dados', function(req, res) {
    const rast = req.body.response;
    // res.render('index');

    rastreio = new rastrearEncomendas(rast)
    //track order
    rastreio.then((response) => {
        if(response == undefined) {
            const result = response[0].eventos.reverse();
            result.forEach(item =>{
                var codigo = item.codigo;
                var descricao = item.descricao;
                var dtHrCriado = item.dtHrCriado;
                var tipo = item.tipo;
                var unidade = item.unidade;
                var urlIcone = item.urlIcone;
                console.log(result);
                res.json({ message: 'ok', rast, result });
            });
        } else {
            res.redirect('/');
        }
    });
});

app.post('/', urlencodedParser, (req, res) => {
    response = {
        tracking: req.body.tracking
    };

    res.end(JSON.stringify(response));
    
});

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/tracking', function(req, res) {
    res.render('tracking');
});

app.listen(3000, function(erro) {
    if(erro) console.log('ocorreu um erro!');
    else console.log('servidor iniciando com sucesso!');
});