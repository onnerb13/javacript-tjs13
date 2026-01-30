const leia = require("readline-sync")
let menorVinteum = 0
let maiorCinquenta = 0
while(true) {
    let numero = leia.question(`Digite uma idade: `)
    if (numero < 21) {
        menorVinteum++
    }
    if(numero > 50) {
        maiorCinquenta++
    }
    if( numero < 0) {
        menorVinteum--
        break
    }
}

console.log(`Total de pessoas menores de 21 anos: ${menorVinteum}`)
console.log(`Total de pessoas maiores de 50 anos: ${maiorCinquenta}`)