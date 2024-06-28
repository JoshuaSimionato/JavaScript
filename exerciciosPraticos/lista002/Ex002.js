let leia = require('readline-sync');
let numero = leia.questionInt("Digite um numero inteiro: ", {limitMessage: "Numero invalido, digite um numero inteiro."});

if (numero % 2 === 0 ){
    console.log(`O numero ${numero} é par.`);
    if (numero >= 0){
        console.log(`O numero ${numero} é positivo`);
    }else{
        console.log(`O numero ${numero} é negativo`);
    }
}else{
    console.log(`O numero ${numero} é impar.`);
    if (numero >= 0){
        console.log(`O numero ${numero} é positivo`);
    }else{
        console.log(`O numero ${numero} é negativo`);
    }
}
