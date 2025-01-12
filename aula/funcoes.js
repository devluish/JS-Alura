// Função o que ela faz

// Parâmetros / Argumentos
// Retorno

/** 
function exibeNomeEstudante(){
    console.log("Luis"); // Se imprimir sozinho, o terminal não retorna nada -> Precisa executar a função
}

exibeNomeEstudante(); // Aqui chamei a função, então ele retorna no console.log
*/

// Console só registra
// O return
function exibeInfosEstudante(nome, nota){
    return `O nome é ${nome} e a nota é ${nota}`;
}
// Cuidado com ordem, ele pode funcionar se estiver na ordem INCORRETA, mas pode gerar BUG dentro do código.
console.log(exibeInfosEstudante("Luis", 10));
console.log(exibeInfosEstudante("Henrique", 5));