const leia = require("readline-sync")
let nome = leia.question("\nInforme o nome (Vertebrado ou Invertebrado): ");

if(nome === 'Vertebrado') {
    let nome = leia.question("\nInforme o nome (Ave ou Mamifero): ");
    
    if (nome === 'Ave') {
        let nome = leia.question("\nInforme o nome (Carnivoro ou Onivoro): ");
        if(nome === 'Carnivoro') {
            console.log("Aguia")
        } else if (nome === 'Onivoro') {
            console.log("Pomba")
        }
    }

     if (nome === 'Mamifero') {
        let nome = leia.question("\nInforme o nome (Onivoro ou Herbivoro): ");
        if(nome === 'Onivoro') {
            console.log("Homem")
        } else if (nome === 'Herbivero') {
            console.log("Vaca")
        }
    }
}

if(nome === 'Invertebrado') {
    let nome = leia.question("\nInforme o nome (Inseto ou Anelídio): ");
    
    if (nome === 'Inseto') {
        let nome = leia.question("\nInforme o nome (Hematofago ou Herbivoro): ");
        if(nome === 'Hematofago') {
            console.log("Pulga")
        } else if (nome === 'Herbivoro') {
            console.log("Lagarta")
        }
    }

     if (nome === 'Anelidio') {
        let nome = leia.question("\nInforme o nome (Hematofago ou Onivoro): ");
        if(nome === 'Hematofago') {
            console.log("Sanguessuga")
        } else if (nome === 'Onivoro') {
            console.log("Minhoca")
        }
    }
}