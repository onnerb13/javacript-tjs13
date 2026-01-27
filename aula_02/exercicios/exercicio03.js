const leia = require("readline-sync")

//Mensagem na tela e a leitura dos valores das mensagens
let salarioBruto = leia.questionFloat("\ninforme o salario bruto: ")
let adicionalNoturno = leia.questionFloat("\ninforme o adicional noturno: ")
let horaExtra = leia.questionFloat("\ninforme a(s) hora(s) extra(s): ")
let descontos = leia.questionFloat("\ninforme o desconto: ")

//Processamentos de dados (calculo do salário líquido)
let salarioLiquido = salarioBruto + adicionalNoturno +( horaExtra * 5) - descontos

//Saída de dados (Valor do salário líquido)
console.log("\nO novo salário líquido é de: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(salarioLiquido)
)