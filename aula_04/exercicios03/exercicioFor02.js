const leia = require("readline-sync")

let totalPar = 0
let totalImpar = 0

for(let contador = 1; contador <= 10; contador++) {
    let numero = leia.questionInt(`Digite o ${contador} numero: `)
    if(numero % 2 == 0){
        totalPar++
    } else {
        totalImpar++
    }
}

console.log(`Total de numeros pares: ${totalPar}`)
console.log(`Total de numeros impares: ${totalImpar}`)