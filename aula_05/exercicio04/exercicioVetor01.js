const leia = require('readline-sync')
let vetor= [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
let vetorInterface= "Vetor |"
let posicao=-1

for(let i=0; i<vetor.length; i++){
    vetorInterface += ` ${vetor[i]} |`;
}

console.log(vetorInterface)

let numero= leia.questionInt("Digite o numero que voce deseja encontrar: ")
for(let i=0; i<vetor.length; i++){
    if(vetor[i]===numero){
        posicao=i
        break
    } 
} 

if (posicao!== -1){
    console.log(`O numero ${numero} está localizado na posição: ${posicao}`);
} else {
    console.log(`O numero ${numero} nao foi encontrado!`);
}