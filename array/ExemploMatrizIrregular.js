let leia = require("readline-sync");

let soma = 0;
let matrizInteiro = Array(2); // define que vai ter 2 elementos com uma (2LINHAS)[ , ]
console.table(matrizInteiro)
for (let indiceLinha = 0; indiceLinha < matrizInteiro.length; indiceLinha++) {  // adicionando colunas
    matrizInteiro[indiceLinha] = Array(3); // define que cada linha terá 3 colunas
    console.table(matrizInteiro)
}

// Preenchendo a matriz com valores fornecidos pelo usuário
for (let indiceLinha = 0; indiceLinha < matrizInteiro.length; indiceLinha++) { // linha
    for (let indiceColuna = 0; indiceColuna < matrizInteiro[indiceLinha].length; indiceColuna++) { // coluna
        matrizInteiro[indiceLinha][indiceColuna] = leia.questionInt(`Digite um número para o elemento [${indiceLinha}][${indiceColuna}]: `);
        console.table(matrizInteiro)

    }
}

// Calculando a soma dos elementos de cada linha
for (let indiceLinha = 0; indiceLinha < matrizInteiro.length; indiceLinha++) { // linha
    soma = 0; // Resetando a soma para cada linha
    for (let indiceColuna = 0; indiceColuna < matrizInteiro[indiceLinha].length; indiceColuna++) { // coluna
        soma += matrizInteiro[indiceLinha][indiceColuna];
    }
    console.log(`Soma dos elementos da linha ${indiceLinha}: ${soma}`);
}

console.table(matrizInteiro);
