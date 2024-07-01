let leia = require("readline-sync");

var vetorNumeros = [];
let soma = contador = 0;

for (let indice = 0; ; indice++){
    vetorNumeros[indice] = leia.questionInt("Digite um numero inteiro:  ")
    if(vetorNumeros[indice] === 0){
        break   // sai do looping
    }else{
        if (vetorNumeros[indice] % 3 === 0){
            soma = vetorNumeros[indice] + soma
            contador++

        }
    }
};
let media = soma / contador;

console.log(`A media de todos os numeros multiplos de 3 e: ${media.toFixed(2)}`)

