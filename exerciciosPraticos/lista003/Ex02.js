const leia = require('readline-sync');

let par = 0, impar = 0, numero, contador;

for(contador = 1; contador <= 10; contador++){
    numero = leia.questionInt(`Digite o ${contador} numero: `);
    if(numero % 2 === 0){
        par = par + 1
    }else{
        impar += 1
    }

}
console.log(`Total de numeros pares: ${par}`)
console.log(`Total de numeros impares: ${impar}`)