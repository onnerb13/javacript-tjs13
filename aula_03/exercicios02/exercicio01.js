const leia = require("readline-sync")

//Mensagem na tela e leitura dos Numeros
let numeroA = leia.questionFloat("\nInforme o numero A: ");
let numeroB = leia.questionFloat("\nInforme o numero B: ");
let numeroC = leia.questionFloat("\nInforme o numero C: ");

// processando o novo valor e saída de dados
if (numeroA + numeroB > numeroC) {
    console.log("\nA soma de A + B é maior que C")
}else if (numeroA + numeroB === numeroC){
    console.log("\nA soma de A + B é igual a C")
}else {
    console.log("\nA soma de A + B é menor que C")
}
console.log(`\nValor de A + B = ${numeroA + numeroB}`)
console.log(`\nValor de C = ${numeroC}`)