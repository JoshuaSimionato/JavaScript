let leia = require('readline-sync'); //importei a biblioteca
let salario = leia.questionFloat("Digite o salário: ", {limitMessage: "Numero invalido, digite um numero float."}); //leitura salario
let abono = leia.questionFloat("Digite o abono: ", {limitMessage: "Numero invalido, digite um numero float."}); //leitura abono
let novoSalario = salario + abono;   //calcula o novo salário
console.log("O novo salário é: R$ " + novoSalario.toFixed(2))


