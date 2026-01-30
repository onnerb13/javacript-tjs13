const leia = require("readline-sync")

let primeiroNum = leia.questionInt("\nInforme o  primeiro numero : ");
let ultimoNum =  leia.questionInt("\nInforme o segundo numero : ");

if(primeiroNum < ultimoNum) {
    for (let contador = primeiroNum;  contador <= ultimoNum ; contador++ ) {
        if(contador % 3 === 0 & contador % 5 === 0){
            console.log(`${contador} e multiplo de 3 e 5`)
        }
}
} else {
    console.log('Intervalo invalido')
}