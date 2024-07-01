const leia = require('readline-sync');

let numero, soma = 0;

do {
    numero = leia.questionInt("Digite um valor (ou digite 0 para parar): ");
    if (numero > 0) {
        soma += numero;
    }
} while (numero !== 0); // Continua até que o número zero seja digitado

console.log(`A soma de todos os números positivos: ${soma.toFixed(2)}`);
