const leia = require("readline-sync")

//Mensagem na tela e leitura dos Numero
let numeroA = leia.questionInt("\nInforme o numero : ");

// processando o novo valor e saída de dados
if(numeroA %2 == 0 ){
    if (numeroA >= 0 ) {
        console.log(`O numero ${numeroA} é par e positivo`)
    } else {
        console.log(`O numero ${numeroA} é par e negativo`)
    }
} else if (numeroA > 0) {
    console.log(`O numero ${numeroA} é ímpar e positivo`)
} else {
    console.log(`O numero ${numeroA} é ímpar e negativo`)
}
