// Crie uma função que verifica se uma palavra é palíndromo.
// palavra que se lê da mesma forma da direita para esquerde, esquerda para direita

//Usar o String.splitch('')
//Usar o Reverse para ler o array

const palavra = "oxo";

const palindromo = (texto) => {
    const palavraPalindromo = (texto.split('').reverse('').join(''));    

    if(palavraPalindromo === palavra){
        console.log("A PALAVRA É PALINDROMO");
    } else{
        console.log("A PALAVRA NÃO É PALINDROMO");
    }
};

palindromo(palavra);





// Retornou a palavra em Array separada






