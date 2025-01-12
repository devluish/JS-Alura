/*Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. 
Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. 
Imprima o maior valor no console.*/

function maiorNumero (a, b, c){
    let maior = a;

    if(b > maior){
        maior = b;
    }
    if(c > maior){
        maior = c;
    }
    return maior;
}

const numero1 = 69;
const numero2 = 66;
const numero3 = 1;

console.log(maiorNumero(numero1, numero2, numero3));

