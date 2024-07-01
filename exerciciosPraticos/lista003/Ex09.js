let leia = require("readline-sync");

let vetorNumeros = [];
var media, soma = 0;

for(let indice = 0; indice < 10; indice++){
     vetorNumeros[indice] = leia.questionInt("Digite um numero inteiro:  ");
     soma += vetorNumeros[indice];
};

console.log("\nElementos indices impares: ")
for(let indice = 1; indice <= vetorNumeros.length; indice+=2){
    process.stdout.write(vetorNumeros[indice] + ' '); // escreve e não pula linha
}

console.log("\n\nElementos pares: ");

for (let indice= 0; indice < vetorNumeros.length; indice++){
    if(vetorNumeros[indice] % 2 === 0){
        process.stdout.write(vetorNumeros[indice] + ' ');
    }
}
media = soma / vetorNumeros.length
console.log(`\n\nSoma: \n${soma}`)
console.log(`\nMedia: \n${media.toFixed(2)}`) //toFixed garante que media seja um numero real

if (Number.isInteger(media)) {
    console.log("\nA média é um número inteiro.");
} else {
    console.log("\nA média é um número real.");
}