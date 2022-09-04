'use strict'

const numeros = [1, 2, 3, 4, 5];
//console.log(numeros);
//document.write(numeros);

for(let i = 0; i < numeros.length; i++){
    //console.log("tenemos el numero " + numeros[i]);
    //document.write("Tenemos el numero" + "<li>" + numeros[i] +"</li>");

    let valor = numeros.length;
   if (valor >= [i]){
        console.log("el numero mayor es: " + valor);
        document.write("el numero mayor es: " + valor +"</br>");
    
    }else{
        alert("Hay un error");
    };
};


