let nome = "Brenno";
let profissao = "pessoa desenvolvedora";
let salarioBruto = 2500.90;
const bonus = 0.05;

//if(salarioBruto > 1000) {
    //nome = "Luiz"
//}
//console.log("o Tipo da variavel nome é:",typeof(nome));

//console.log(nome);

console.log("Sálario Liquído: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(salarioBruto + (bonus * salarioBruto))
)