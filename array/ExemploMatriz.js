let leia = require("readline-sync");

let matrizInteiro = Array(3); // define que vai ter 3 elementos [undefined, undefined, undefined]

for (let indiceLinha = 0; indiceLinha < matrizInteiro.length; indiceLinha++) {  // percorre cada elemento que tem 3 posicoes vazis
    matrizInteiro[indiceLinha] = Array(3); //  define uma matriz 3x3, esse for ele transforma uma array unidmensional em bidimensional
}

// Adicionando valores à matriz
for (let indiceLinha = 0; indiceLinha < matrizInteiro.length; indiceLinha++) { //linha
    for (let indiceColuna = 0; indiceColuna < matrizInteiro[indiceLinha].length; indiceColuna++) { //coluna
        matrizInteiro[indiceLinha][indiceColuna] = leia.questionInt(`Digite um numero para o elemento [${indiceLinha}][${indiceColuna}]: `); // exemplo de valor
    }
}

console.table(matrizInteiro);
