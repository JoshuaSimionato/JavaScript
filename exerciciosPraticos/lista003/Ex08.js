let leia = require("readline-sync");

let guardaNumeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

for(let indice = 0; indice < guardaNumeros.length; indice++){
    numeroDesejado = leia.questionInt("\nDigite o numero que voce deseja encontrar: ");
    let posicao = guardaNumeros.indexOf(numeroDesejado) //posicao no vetor
    console.log(posicao)
    if(posicao === -1){
        console.log(`\nO numero ${numeroDesejado} nao foi encontrado!`);
        break;
    }else{
        console.log(`\nO numero ${numeroDesejado} esta localizado na posicao ${posicao}`);
        break;
    }
}
