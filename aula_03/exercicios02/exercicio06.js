const leia = require("readline-sync")

console.log("Codigo do cargo     / Cargo           / Percentual do reajuste\n")
console.log("        1           / Gerente         /           10%")
console.log(`        2           / Vendedor        /            7%`)
console.log(`        3           / Supervisor      /            9%`)
console.log(`        4           / Motorista       /            6%`)
console.log(`        5           / Estoquista      /            5%`)
console.log(`        6           / Tecnico de TI   /            8%`)


let nome = leia.question("\nNome do colaborador: ")
let salario = leia.questionFloat("\nSeu salario: ")
let codigoCargo = leia.questionInt("\nCodigo do cargo: ")
let reajuste = 0.0
let cargo = ""
let novoSalario = 0.0
const formato = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL' 
});

switch(codigoCargo) {
    case 1:

        cargo = 'Gerente'
        reajuste = 0.10
        break;
    case 2:
        cargo = 'Vendedor'
        reajuste = 0.7
        break;
        
    case 3:
        cargo = 'Supervisor'
        reajuste = 0.9
        break;
        
    case 4:
        cargo = 'Motorista'
        reajuste = 0.4
        break;
    case 5:
        cargo = 'Estoquista'
        reajuste = 0.5
        break;
    case 6:
        cargo = 'Tecnico de TI'
        reajuste = 0.8
        break;
}

novoSalario = salario + (reajuste * salario)
console.log(`\n${nome}`)
console.log(cargo)
console.log(`Novo Salario: ${formato.format(novoSalario)} `)

