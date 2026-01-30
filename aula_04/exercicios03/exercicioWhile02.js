const leia = require("readline-sync")

console.log(`\nIdentidade de Gênero / Pessoa Desenvolvedora`)
console.log(`1 – Mulher Cis       / 1 – Backend            `)
console.log(`2 – Homem Cis        / 2 – Frontend           `)
console.log(`3 – Nao Binario      / 3 – Mobile             `)
console.log(`4 – Mulher Trans     / 4 – FullStack          `)
console.log(`5 – Homem Trans      / 5 –                    `)
console.log(`6 – Outros                                  \n`)

let totalBackend = 0
let totalMulherCTDevMo = 0
let totalBinarioFullstack = 0
let totalMobile = 0
let pessoas = 0
let maxIdade = 0

while (true) {
    
    let idade = leia.questionInt(`\nSua idade: `)
    let identidadeGenero = leia.questionInt(`Identidade de Genero: `)
    let pessoaDesenvolvedor = leia.questionInt(`Pessoa Desenvolvedora: `)
    
    pessoas++
    
    if(pessoaDesenvolvedor === 1) {
        totalBackend++
    }
    if((identidadeGenero === 1 || identidadeGenero === 4) && pessoaDesenvolvedor === 2){
        totalMulherCTDevMo++
    }
    
    if((identidadeGenero === 2 || identidadeGenero === 5) && pessoaDesenvolvedor === 3){
       totalMobile++
    }

    if(identidadeGenero === 3 && pessoaDesenvolvedor === 4 &&  idade < 30) {
        totalBinarioFullstack++
    }

    maxIdade += idade

    let continuar = leia.question(`\nDeseja Continuar(S/N):`)
    if (continuar === 'N' || continuar === 'n') {
        break;
    }
}

let media = parseFloat(maxIdade) /parseFloat(pessoas)

    console.log(`\nTotal de pessoas desenvolvedoras backend:${totalBackend}`)
    console.log(`Total de mulheres cis e trans desenvolvedoras frontend:${totalMulherCTDevMo}`)
    console.log(`O número de Homens cis e Trans desenvolvedores Mobile maiores de 40 anos:${totalMobile}`)
    console.log(`O número de Não Binários desenvolvedores FullStack menores de 30 anos:${totalBinarioFullstack}`)
    console.log(`O número total de pessoas que responderam à pesquisa: ${pessoas}`)
    console.log(`A média de idade das pessoas que responderam à pesquisa ${media.toFixed(2)}`)