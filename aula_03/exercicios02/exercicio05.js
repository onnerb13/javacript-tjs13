const leia = require("readline-sync")

console.log("codigo do produto   / produto         / preco unitario\n")
console.log("        1           / Cachorro Quente / R$ 10.00")
console.log(`        2           / X-Salada        / R$ 15.00`)
console.log(`        3           / X-Bacon         / R$ 18.00`)
console.log(`        4           / Bauru           / R$ 12.00`)
console.log(`        5           / Refrigerante    / R$ 08.00`)
console.log(`        6           / X-Salada        / R$ 13.00`)

let codigoProduto = leia.questionInt("\nCodigo do produto: ")
let preco = 0.0
let valorFinal = 0.0
const formato = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL' 
});

switch(codigoProduto) {
    case 1:
        console.log("Cachorro Quente")
        preco = 10.00
        break;
    case 2:
        console.log("X-salada")
        preco = 15.00
        break;
        
    case 3:
        console.log("X-Bacon")
        preco = 18.00
        break;
        
    case 4:
        console.log("Bauru")
        preco = 12.00
        break;
    case 5:
        console.log("Refrigerante")
        preco = 8.00
        break;
    case 6:
        console.log("Suco de laranja")
        preco = 13.00
        break;
}

let quantidade = leia.questionFloat("\nQuantidade: ")
valorFinal = preco * quantidade

console.log(`Valor Final: ${formato.format(valorFinal)}`)
