const leia = require('readline-sync');
const nome = leia.question("Nome do aluno: ")
const nota1 = leia.questionFloat("Digite a nota 1: ")
const nota2 = leia.questionFloat("Digite a nota 2: ")
const nota3 = leia.questionFloat("Digite a nota 3: ")
const nota4 = leia.questionFloat("Digite a nota 4: ")
const media = (nota1 + nota2 + nota3 + nota4) / 4
console.log('A média final de ' + nome +'é: ' + media.toFixed(1))
