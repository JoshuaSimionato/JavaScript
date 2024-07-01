let leia = require("readline-sync");

let matrizBimestreNotas = Array(10);  // Define que a matriz terá 10 linhas
let vetorMedias = Array(10);  // Vetor para armazenar as médias de cada participante

// Inicializa a matriz com 4 colunas para cada linha
for (let i = 0; i < matrizBimestreNotas.length; i++) {
    matrizBimestreNotas[i] = Array(4); // Cada linha terá 4 colunas (notas dos bimestres)
}

// Preenche a matriz com os valores que o usuário digitou
for (let i = 0; i < matrizBimestreNotas.length; i++) { // Percorre cada linha (participante)
    for (let j = 0; j < matrizBimestreNotas[i].length; j++) { // Percorre cada coluna da linha i (nota do bimestre)
        matrizBimestreNotas[i][j] = leia.questionFloat(`Digite o valor para [${i}][${j}]: `,
            { limitMessage: "Número inválido, digite um número float." });
    }
}

// Calcula a soma dos elementos de cada linha e a média
for (let i = 0; i < matrizBimestreNotas.length; i++) { // Percorre cada linha (participante)
    let soma = 0; // Resetando a soma para cada linha
    for (let j = 0; j < matrizBimestreNotas[i].length; j++) { // Percorre cada coluna da linha i
        soma += matrizBimestreNotas[i][j];
    }
    let media = soma / matrizBimestreNotas[i].length; // Calcula a média da linha
    vetorMedias[i] = media; // Armazena a média no vetor de médias
}

// Exibe as médias na tela
for (let i = 0; i < vetorMedias.length; i++) {
    console.log(`Média do participante ${i + 1}: ${vetorMedias[i].toFixed(2)}`);
}

console.table(matrizBimestreNotas);
console.table(vetorMedias);
