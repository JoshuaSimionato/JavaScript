const leia = require('readline-sync');

let numero, contador, numero2, cont=0;

for(contador = 1; contador <= 10; contador++){  //pos contador++
    numero = leia.questionInt("Calcule a Multiplicacao de: ");
    numero2 = leia.questionInt("Vezes o numero: ");
    console.log(`${numero} x ${numero2} = ${numero * numero2}`);

    if (numero % 2 == 0){
        cont++
    }

}

console.log(`${cont} vezes multiplicacao de numeros pares`)
