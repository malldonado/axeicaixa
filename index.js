const express = require('express'); // importando o express
const app = express(); //iniciando o express
const path = require('path');

// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
// app.set(express.static(path.join(__dirname, 'public')));
app.use('/public/', express.static('public'));

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

app.listen(3000, function(erro) {
    if(erro) console.log('ocorreu um erro!');
    else console.log('servidor iniciando com sucesso!');
});