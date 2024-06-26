const leia = require('readline-sync');
const nome = leia.question("Nome do funcionário: ")
const bruto = leia.questionFloat("Salário Bruto: ")
const noturno = leia.questionFloat("Adcional Noturno: ")
const horaExtra = leia.questionFloat("Horas Extras: ")
const desconto = leia.questionFloat("Descontos: ")
const somaSalario = bruto + noturno + (horaExtra * 5) - desconto
console.log("O salário liquido de" + nome + " é de R$" + somaSalario.toFixed(2))