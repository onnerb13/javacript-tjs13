const leia = require('readline-sync')

let numero;
let quantidade = 0
let media = 0;
totalNumero = 0

do {
    numero = leia.questionInt('Digite um numero: ')
    
    if (numero %3 === 0 && numero !== 0){
        totalNumero += numero
        quantidade++
    }
        
} while (numero!==0)

media = parseFloat(totalNumero) / parseFloat(quantidade) 
console.log(`\nA media de todos os multiplos de 3 é ${media.toFixed(2)}`)