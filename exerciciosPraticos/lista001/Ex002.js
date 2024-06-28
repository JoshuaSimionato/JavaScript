let leia = require('readline-sync');
let nome = leia.question("Nome do aluno: ")
let nota1 = leia.questionFloat("Digite a nota 1: ", {limitMessage: "Numero invalido, digite um numero float."})
let nota2 = leia.questionFloat("Digite a nota 2: ", {limitMessage: "Numero invalido, digite um numero float."})
let nota3 = leia.questionFloat("Digite a nota 3: ", {limitMessage: "Numero invalido, digite um numero float."})
let nota4 = leia.questionFloat("Digite a nota 4: ", {limitMessage: "Numero invalido, digite um numero float."})
let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log(`A média final de ${nome} é ${media}`)
//console.log('A média final de ' + nome +'é: ' + media.toFixed(1))
