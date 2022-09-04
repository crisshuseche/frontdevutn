'use strict'

let recorrido = parseInt(prompt("Introduce tu recorrido (metros): ", 0));
//console.log(typeof(distancia));

while (isNaN(recorrido)) {
    recorrido = parseInt(prompt("Introduce un recorrido válido (metros):", 0));
}

if (recorrido >= 0 || recorrido < 1000 || recorrido == 1000) {
    console.log(`Usted realizará un recorrido de ${recorrido} metros, por tanto debe ir a pie`);
    document.write(`Usted realizará un recorrido de ${recorrido} metros, por tanto debe ir a pie`);

} else if (recorrido > 1000 || recorrido <= 10000 || recorrido == 10000) {
    console.log(`Usted realizará un recorrido de ${recorrido} metros, por tanto debe ir en bici`);
    document.write(`Usted realizará un recorrido de ${recorrido} metros, por tanto debe ir en bici`);

} else if (recorrido > 10000 || recorrido <= 30000 || recorrido == 30000) {
    console.log(`Usted realizará un recorrido de ${recorrido} metros, por tanto debe ir en colectivo`);
    document.write(`Usted realizará un recorrido de ${recorrido} metros, por tanto debe ir en colectivo`);

} else if (recorrido > 30000 || recorrido < 100000) {
    console.log(`Usted realizará un recorrido de ${recorrido} metros, por tanto debe ir en auto`);
    document.write(`Usted realizará un recorrido de ${recorrido} metros, por tanto debe ir en auto`);

} else if (recorrido == 100000 || recorrido >= 100000) {
    console.log(`Usted realizará un recorrido de ${recorrido} metros, por tanto debe ir en avión`);
    document.write(`Usted realizará un recorrido de ${recorrido} metros, por tanto debe ir en avión`);

} else {
    alert("El valor introducido es incorrecto");

};



