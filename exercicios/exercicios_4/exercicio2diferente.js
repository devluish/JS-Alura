/*Crie uma função que receba a altura de uma pessoa (em centímetros) e retorne se ela é alta ou baixa. 
Considere que uma pessoa é alta se a altura for maior ou igual a 170 cm.

Depois, crie duas variáveis com alturas diferentes e use console.log para verificar o resultado da função com essas variáveis.
*/

function medidorAltura (altura){
    if(altura <= 140){
        return "Você é baixo"
    }else if(altura <= 170){
        return "Você tem a estatura média"
    }else{
        return "Você é alto"
    }
}

const minhaAltura = 135;

console.log(medidorAltura(minhaAltura));
