// Crie uma função calcularMedia que recebe 3 notas e retorna a média.

//Utilizando arrow
// const mediaNota = (primeiraNota, segundaNota, terceiraNota) => {
//     return (primeiraNota + segundaNota + terceiraNota) / 3;
// }

// const primeiraNota = 8;
// const segundaNota = 9;
// const terceiraNota = 6;

// console.log(mediaNota(primeiraNota, segundaNota, terceiraNota));

//Utilizando function

function mediaNota (nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3;
}

const nota1 = 10;
const nota2 = 5;
const nota3 = 6;

console.log("Sua média é: " + mediaNota(nota1, nota2, nota3));
