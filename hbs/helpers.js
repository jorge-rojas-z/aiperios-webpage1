const hbs = require('hbs');
//HELPERS
//Funciones que se ejecutan cuando las paginas son cargadas. HBS busca 
//primero si existen parámetros con ese nombre, sino dps se va a los
//Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');

    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    });

    return palabras.join(' ');
});