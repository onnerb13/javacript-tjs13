const leia = require("readline-sync")

//Mensagem na tela e a leitura dos numeros
let numero1 = leia.questionFloat("\ninforme o primeiro numero: ")
let numero2 = leia.questionFloat("\ninforme o segundo numero: ")
let numero3 = leia.questionFloat("\ninforme o terceiro numero: ")
let numero4 = leia.questionFloat("\ninforme o quarto numero: ")

//Processamentos de dados
resultadoFinal = (numero1 * numero2) - (numero3 * numero4)

//Saída de dados (resultado final)
console.log(`\nCalculo = ${resultadoFinal} `)