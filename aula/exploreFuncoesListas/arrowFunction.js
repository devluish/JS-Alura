// Arrow Functions
// Pratica e curta, pode ser utilizada direta "Direta para chamar algo direto"

const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4){
        return true;
    } else { return false;
    }
}

const exibeNome = (nome) => {
}

/*
Consigo chamar assim curtamente.

const exibeNome = (nome) => nome;
*/


console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));
