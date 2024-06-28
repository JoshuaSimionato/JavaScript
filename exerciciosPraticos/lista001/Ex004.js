const leia = require('readline-sync');
const valor1 = leia.questionFloat("Digite o valor de n1: ", {limitMessage: "Numero invalido, digite um numero float."})
const valor2 = leia.questionFloat("Digite o valor de n2: ", {limitMessage: "Numero invalido, digite um numero float."})
const valor3 = leia.questionFloat("Digite o valor de n3: ", {limitMessage: "Numero invalido, digite um numero float."})
const valor4 = leia.questionFloat("Digite o valor de n4: ", {limitMessage: "Numero invalido, digite um numero float."})
const produto1 = valor1 * valor3
const produto2 = valor2 * valor4
const calculo = (valor1 * valor2) - (valor3 * valor4)
//console.log('O resultado da diferença do produto é ' + calculo)
console.log(`O resualtado da diferença do produto é ${calculo}`)

if(produto1 > produto2){
    console.log('O produto n1 e n3 é maior que o produto n2 e n4')
}else if(produto2 > produto1){
    console.log('O produto n2 e n4 é maior que o produto n1 e n3')
}else {
    console.log('O produto n1 e n3 é igual ao produto n2 e n4')
}