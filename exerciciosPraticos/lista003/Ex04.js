const leia = require('readline-sync');

let idade, codigo1, codigo2, continua = true;
let back = 0, front = 0, mobile = 0, full = 0, totalPeople = 0, somaIdade = 0;

while (continua) {
    idade = leia.questionInt("Idade: ");  // le a idade

    console.log("\n++++++++++++MENU+++++++++++++++")
    console.log("\n Identidade de Genero: "); // le o genero
    console.log("\n 1 -- Mulher Cis ");
    console.log("\n 2 -- Homem Cis ");
    console.log("\n 3 -- Nao Binario");
    console.log("\n 4 -- Mulher Trans");
    console.log("\n 5 -- Homem Trans");
    console.log("\n 6 -- Outros");
    console.log("\n+++++++++++++++++++++++++++++");
    codigo1 = leia.questionInt("\nIdentidade de Genero(opcao menu): ");
   
    console.log("\n++++++++++++MENU+++++++++++++++") 
    console.log("\n Pessoa Desenvolvedora: ");  // le a stack
    console.log("\n 1 -- Backend ");
    console.log("\n 2 -- Frontend ");
    console.log("\n 3 -- Mobile ");
    console.log("\n 4 -- FullStack");
    console.log("\n+++++++++++++++++++++++++++++++");
    codigo2 = leia.questionInt("\nPessoa Desenvolvedora(opcao menu): ");

    switch (codigo2) {
        case 1:
            back += 1;
            break;
        case 2:
            if (codigo1 === 1 || codigo1 === 4) {
                front += 1;  // Contabiliza mulheres cis e trans no Frontend
            }
            break;
        case 3:
            if ((codigo1 === 2 || codigo1 === 5) && idade > 40) {
                mobile += 1;  // Contabiliza homens cis e trans maiores de 40 anos no Mobile
            }
            break;
        case 4:
            if (codigo1 === 3 && idade < 30) {
                full += 1;  // Contabiliza não binários menores de 30 anos no FullStack
            }
            break;
        default:
            console.log('\nDigite um código válido.');
    }

    continua = leia.keyInYNStrict("\nDeseja continuar?"); // continuar sim ou não
    totalPeople += 1;
    somaIdade += idade;
}

console.log(`\nNúmero de pessoas desenvolvedoras Backend: ${back}`);
console.log(`\nNúmero de Mulheres Cis e Trans desenvolvedoras Frontend: ${front}`);
console.log(`\nNúmero de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${mobile}`);
console.log(`\nNúmero de Não Binários desenvolvedores FullStack menores de 30 anos: ${full}`);
console.log(`\nNúmero total de pessoas que responderam à pesquisa: ${totalPeople}`);
console.log(`\nA média de idade das pessoas que responderam à pesquisa: ${(somaIdade / totalPeople).toFixed(2)}`);
