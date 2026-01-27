const leia = require("readline-sync")

//Mensagem na tela e leitura do salario/abono
let salario = leia.questionFloat("\nInforme o Salario: ")
let abono = leia.questionFloat("\nInforme o abono ")

// processando o novo valor
let novoSalario = salario + abono

// saída do novo valor
console.log("\nNovo Salário: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(novoSalario)
)
