let leia = require("readline-sync");

// let vetorstring = [
//     "Boxer",
//     "Pastor Alemão",
//     "Pinscher",
//     "Husky Siberiano",
//     "Corgi",
//     "Caramelo",
//     "Pitbull"
// ];
// let numeros = Array(5)
// let vetorNumeros = [5, 2, 6, 7, 9, 3, 99, 22]


// for (let contador = 0; contador < vetorstring.length; contador++) {
//     console.log(`Posição[${contador}] = ${vetorstring[contador]}`)
// };

// for (let contador = 0; contador < numeros.length; contador++) {
//     numeros[contador] = leia.questionInt("Digite um numero: ")
// };

let matrizInteiro = Array(3); // define que vai ter 3 elementos

for (let indiceLinha = 0; indiceLinha < matrizInteiro.length; indiceLinha++) {  // adicionando colunas
    matrizInteiro[indiceLinha] = Array(3); // define que cada linha da matriz terá 3 colunas
    console.log(matrizInteiro[indiceLinha])
}
