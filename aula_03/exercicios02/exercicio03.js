const leia = require("readline-sync")

//Mensagem na tela e leitura dos Numeros
let nomeDoador = leia.question("\nInforme o nome do doador: ");
let idadeDoador = leia.questionInt("\nInforme a idade do doador: ");

//
if (idadeDoador > 18 && idadeDoador < 69) {
    let primeiraDoacao = leia.question("e a primeira doacao? digite S ou N: ") === "S";
    if (idadeDoador >= 60 && primeiraDoacao){
        console.log(`${nomeDoador} Não esta apto para doar sangue !`)
    } else {
        console.log(`${nomeDoador} Está apto para doar sangue !`)
    }
} else {
    console.log(`${nomeDoador} Não esta apto para doar sangue !`)
}