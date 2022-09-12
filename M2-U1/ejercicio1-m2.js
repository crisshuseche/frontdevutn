'use strict'

let pagina = document.getElementsByTagName('body')[0];
const caja1 = document.getElementById('pink');
const caja2 = document.getElementById('purple');
const caja3 = document.getElementById('peach');

caja1.addEventListener('click', function () {
    console.log("Evento capturado");
    pagina.style.background = "pink";

});

caja2.addEventListener('click', function () {
    console.log("Evento capturado");
    pagina.style.background = "purple";

});

caja3.addEventListener('click', function () {
    console.log("Evento capturado");
    pagina.style.background = "peachpuff";

});





