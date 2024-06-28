const leia = require('readline-sync')

console.log("Ola, digite o codigo do produto desejado e a quantidade comprada.");
console.log("1 - Cachorro Quente (R$ 10.00)");
console.log("2 - X-Salada (R$ 15.00)");
console.log("3 - X-Bacon (R$ 18.00)");
console.log("4 - Bauru (R$ 12.00)");
console.log("5 - Refrigerante (R$ 8.00)");
console.log("6 - Suco de Laranja (R$ 13.00)");

let codigo = leia.questionInt("\nDigite o codigo do produto (1 a 6): ");
let quantidade = leia.questionInt("Digite a quantidade comprada: ");
let nomeProduto;
let precoUnitario;
let valorTotal;

switch (codigo) {
    case 1:
        nomeProduto = "Cachorro Quente";
        precoUnitario = 10.00;
        break;
    case 2:
        nomeProduto = "X-Salada";
        precoUnitario = 15.00;
        break;
    case 3:
        nomeProduto = "X-Bacon";
        precoUnitario = 18.00;
        break;
    case 4:
        nomeProduto = "Bauru";
        precoUnitario = 12.00;
        break;
    case 5:
        nomeProduto = "Refrigerante";
        precoUnitario = 8.00;
        break;
    case 6:
        nomeProduto = "Suco de Laranja";
        precoUnitario = 13.00;
        break;
    default:
        console.log("Código do produto inválido!");
}
valorTotal = quantidade * precoUnitario;
console.log(`Voce comprou ${quantidade} ${nomeProduto}(s).`);
console.log(`O valor total da conta: ${valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`);