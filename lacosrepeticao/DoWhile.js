const leia = require('readline-sync');

let continua;
let numero1, numero2, resultado;


console.log("\n++++++++++++MENU+++++++++++++++");
continua = leia.keyInYNStrict("\nDeseja usar nossa calculadora de soma");
console.log("+++++++++++++++++++++++++++++++++");

do{
    numero1 = leia.questionInt("Digite o primeiro valor: ");
    numero2 = leia.questionInt("Digite o segundo valor: ");

    resultado = numero1 + numero2;
    console.log(`O resultador da soma é: ${resultado}`);

    console.log("\n++++++++++++MENU+++++++++++++++");
    continua = leia.keyInYNStrict("\nDeseja usar nossa calculadora de soma"); //nova funcao
    console.log("+++++++++++++++++++++++++++++++++");

}while(continua); //executa e depoois pergunta
