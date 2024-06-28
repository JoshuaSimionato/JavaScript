const leia = require('readline-sync');
const saldo = 1000.00;
let codigo;
console.log(`\n Olá, digite a opcao do menu desejada!`);
console.log("\n 1 -- Saldo ");
console.log("\n 2 -- Saque ");
console.log("\n 3 -- Deposito ");
codigo = leia.questionInt("\nQual opcao: ");

switch (codigo) {
    case 1:   //saldo
        console.log(`\nO seu saldo é ${saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break
    case 2:   //saque
        saque = leia.questionFloat('\nQuanto deseja sacar? ', { limitMessage: "Numero invalido, digite um numero inteiro." });
        let valorTotal = saldo - saque
        if (saque < 0) {
            console.log(`Opcao Invalida! Valor do saque deve ser positivo`)
        } else if (valorTotal >= 0) {
            console.log(`\nVoce sacou ${saque.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
            console.log(`\nSeu saldo atual: ${valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        } else {
            saque = leia.questionFloat('\nQuanto deseja sacar? ', { limitMessage: "Numero invalido, digite um numero inteiro." });
            console.log(`Saldo Insuficiente.`);
        }
        break
    case 3:  //deposito
        deposito = leia.questionFloat('\nQuanto deseja depositar? ', { limitMessage: "Numero invalido, digite um numero inteiro." });
        novoSaldo = saldo + deposito
        console.log(`Voce depositou ${deposito.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        console.log(`Novo saldo: ${novoSaldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break
    default:
        console.log('\nOperacao Invalida.');
}