const express = require('express')
const hbs = require('hbs');
const app = express()
require('dotenv').config();

const port = process.env.PORT;
// TODO: requiere hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Adrian Campos',
        title: 'Mi pagina'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic');
})

app.get('/elements', (req, res) => {
    res.render('elements');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});


app.listen(port);