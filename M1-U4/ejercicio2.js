'use strict'

const numeros = [8, 44, 23, 85, 2, 5];
//console.log(numeros);
//document.write(numeros);

let mayor = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
};

console.log(`El numero mayor de ${numeros} es ${mayor}`);
document.write(`El numero mayor de ${numeros} es ${mayor}`);


