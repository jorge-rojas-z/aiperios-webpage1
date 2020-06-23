const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');
const app = express();

//Heroku nos dará el numero de puerto y ese es el que se configura
const port = process.env.PORT || 3000;

//middleware: funcion o callback que se va a ejecutar siempre, sin
// importar la url que el usuario escriba

app.use(express.static(__dirname + '/public'));
// express hbs engine
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    // express lo reconoce automático
    //res.send(salida);
    res.render('home', {
        nombre: 'Draven'
    });
});

app.get('/about', (req, res) => {

    // express lo reconoce automático
    //res.send(salida);
    res.render('about');
});

app.get('/data', (req, res) => {
    res.send('Hello Data')

});

app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${port}`);
});