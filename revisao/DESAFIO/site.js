//Crie um sistema que verifica se um usuário pode acessar um site:
// Deve ser maior de 18
// Ter aceitado os termos (true)
// E estar logado (true)


// segunda tentativa
// const idade = 18;
// const termos = true;
// const login = true;


// const verificacao = (idade, termos, login) => {
//     if(idade >= 18){
//         console.log("Usuário maior de idade, pode acessar");   
//     }else{
//         console.log("Menor de idade");
        
//     }if(termos){
//         console.log("Termos aceitos");
//     }else{
//         console.log("Precisa aceitar os termos antes de prosseguir");
//     }
//     if(login ){
//         console.log("Feito o Login com sucesso!");
//     }else{
//         console.log("Faz o L");
        
//     }
// }

// verificacao(idade, termos, login);

// terceira

const idade = 18;
const termos = true;
const login = true;


const verificacao = (idade, termos, login) => {
    if(idade >= 18 && termos && login){
        console.log("Usuário pode acessar o sistema!");
        
    }
}

verificacao(idade, termos, login);