const leia = require('readline-sync') //faz a validação do tipo de netrada que foi recebido

let nome;
let codigo;

nome = leia.question("\nDigite seu nome: ")

console.log("\n Faixas Etárias: ");
console.log("\n 1 -- De 0 a 10 anos ");
console.log("\n 2 -- De 11 a 29 anos ");
console.log("\n 3 -- De 30 a 45 anos ");
console.log("\n 4 -- De 46 a 59 anos");
console.log("\n 5 -- De 60 a 65 anos ");
console.log("\n 6 -- Acima de 65 anos ");

codigo = leia.questionInt("\nDigite o codigo da sua faixa etaria: ")

switch (codigo) {
    case 1:
        console.log('\nO seu plano de saude custara R$ 100,00 por mes.');
        break
    case 2:
        console.log('\nNo seu plano de Saude custara R$ 200,00 por mes.');
        break
    case 3:
        console.log('\nNo seu plano de Saude custara R$ 300,00 por mes.');
        break
    case 4:
        console.log('\nNo seu plano de Saude custara R$ 400,00 por mes.');
        break
    case 5:
        console.log('\nNo seu plano de Saude custara R$ 500,00 por mes.');
        break
    case 6:
        console.log('\nO seu Plano de Saude custara R$ 1000,00 por mes');
        break
    default: //como não entra em nenhum dos case ele entra no default 
        console.log('\nDigite um codigo valido.')
}

