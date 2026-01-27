const leia = require("readline-sync")

//Mensagem na tela e leitura das notas
let nota1 = leia.questionFloat("\ninforme a primeira nota: ")
let nota2 = leia.questionFloat("\ninforme a segunda nota: ")
let nota3 = leia.questionFloat("\ninforme a terceira nota: ")
let nota4 = leia.questionFloat("\ninforme a quarta nota: ")

//Processamento de dados (fazendo a média dos numeros)
let media = (nota1 + nota2 + nota3 + nota4)/4

//Sáida de dados (resultado final)
console.log(`\nMédia final: ${media.toFixed(1)}`)