const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.send('oi');
});

app.listen('8080', () => {
    console.log('listening on port 8080');
});