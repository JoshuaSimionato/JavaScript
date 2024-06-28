let leia = require('readline-sync');
let nome = leia.question("Nome do funcionario: ")
let bruto = leia.questionFloat("Salario Bruto: R$", {limitMessage: "Numero invalido, digite um numero float."})
let noturno = leia.questionFloat("Adcional Noturno: R$", {limitMessage: "Numero invalido, digite um numero float."})
let horaExtra = leia.questionFloat("Horas Extras: R$", {limitMessage: "Numero invalido, digite um numero float."})
let desconto = leia.questionFloat("Descontos: R$", {limitMessage: "Numero invalido, digite um numero float."})
let somaSalario = bruto + noturno + (horaExtra * 5) - desconto
console.log(`O salario liquido de ${nome} é de R$${somaSalario.toFixed(2)}`)
