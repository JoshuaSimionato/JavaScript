const leia = require('readline-sync'); //importei a biblioteca
const salario = leia.questionFloat("Digite o salário: "); //leitura salario
const abono = leia.questionFloat("Digite o abono: "); //leitura abono
const novoSalario = salario + abono;   //calcula o novo salário
console.log("O novo salário é: R$ " + novoSalario.toFixed(2))


