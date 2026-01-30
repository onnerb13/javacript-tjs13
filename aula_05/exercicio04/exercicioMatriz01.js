const leia = require('readline-sync');
let diagonalPrincipal = Array(3)
let diagonalSecundaria = Array(3)
let somaDP =0;
let somaDS = 0;

let matrizInteiros = Array.from({ length: 3 }, () => 
    Array.from({ length: 3 }, () => 
        leia.questionInt("Digite um numero: ")
    )
);

// let matrizInteiros = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

console.table(matrizInteiros)

for(let i=0; i<matrizInteiros.length; i++) {
    diagonalPrincipal[i] = matrizInteiros[i][i]
    diagonalSecundaria[i] = matrizInteiros[i][matrizInteiros.length - 1 - i]
    somaDP= somaDP+diagonalPrincipal[i]
    somaDS= somaDS+diagonalSecundaria[i]
}


console.log("Elementos da Diagonal Principal:\n", diagonalPrincipal.join(" "))
console.log("Elementos da Diagonal Secundária:\n",diagonalSecundaria.join(" "))
console.log("Soma dos Elementos da Diagonal Principal:\n", somaDP)
console.log("Soma dos Elementos da Diagonal Secundaria:\n", somaDS)