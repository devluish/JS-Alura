/*Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.*/

function maiorIdade (idade){
    if(idade >= 18){
        return "maior de idade"
        
    } else {
        return "menor de idade"
    }
}

let minhaIdade = 25;
let minhaSegundaIdade = 14;

console.log(maiorIdade(minhaIdade));


