const leia = require("readline-sync")

let continua = true;
let totalpessoas;
let mediaIdade;
let back, mFront, full, mobileMais40, nBinariofullM30;

while (continua == true) {
    let idade = leia.questionInt("Digite a idade: ");

    console.log("Codigo - Genero \n 1 - Mulher Cis \n 2 - Homem Cis \n 3 - Nao Binario \n 4 - Mulher Trans \n 5 - Homem Trans \n 6 - Outros ")

    let idGenero = leia.questionInt("Digite o codigo do genero: ");

    console.log("Codigo - Desenvolvedor \n 1 - Backend \n 2 - Frontend \n 3 - Mobile \n 4 - FullStack ")

    let idDesenvolvedor = leia.questionInt("Digite o codigo do tipo de desenvolvedor: ");

    totalpessoas++;
    mediaIdade += idade;
    if (idDesenvolvedor == 1)
        back++
    if ((idGenero == 1  idGenero == 4) && (idDesenvolvedor == 2))
        mFront++
    if ((idGenero == 2  idGenero == 5) && (idDesenvolvedor == 3) && (idade > 40))
        mobileMais40++
    if ((idGenero == 3) && (idDesenvolvedor == 4) && (idade < 30))
        nBinariofullM30++

    continua = leia.keyInYNStrict("\nDeseja continuar? ");

}
console.log(Total de pessoas desenvolvedoras backend: ${back}
     \nTotal de mulheres cis e trans desenvolvedoras Frontend: ${mFront}
      \nTotal de homens cis e trans desenvolvedores Mobile maiores de 40 anos: ${mobileMais40}
      \nTotal de pessoas nao binarias desenvolvedoras FullStack menores de 30 anos: ${nBinariofullM30}
      \nTotal de pessoas que responderam a pesquisa: ${totalpessoas}
      \nMedia de idade das pessoas que responderam a pesquisa: ${(mediaIdade / totalpessoas).toFixed()}

);