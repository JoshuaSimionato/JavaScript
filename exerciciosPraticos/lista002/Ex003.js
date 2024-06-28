const leia = require('readline-sync');
let nome = leia.question("Nome do doador: ").toUpperCase();
let idade = leia.questionInt("Qual a sua idade: ", { limitMessage: "Numero invalido, digite um numero inteiro." });

if (idade >= 60 && idade <= 69) {
    let jaDoou = leia.question("Ja fez a doacao de sangue antes? (sim/nao) : ");
    if (jaDoou.toLowerCase() === 'sim') {
        console.log(`${nome}, você esta apto para doar sangue`);
    } else if (jaDoou.toLowerCase() === 'nao') {
        console.log(`${nome}, você não esta apto para doar sangue`);
    }else {
        console.log("Resposta inválida. Por favor, execute o programa novamente e digite 'sim' ou 'não'.");
    }
} else if (idade > 69) {
    console.log(`${nome} voce não esta apto para doar sangue porque voce tem mais de 69 anos.`)
}else if (idade >= 18 && idade < 69){
    console.log(`${nome}, você esta apto para doar sangue.`)
}else {
    console.log(`${nome} voce não esta apto para doar sangue porque voce tem menos de 18 anos.`)
}

