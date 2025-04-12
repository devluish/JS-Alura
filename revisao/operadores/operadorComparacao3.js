//Verifique se uma pessoa pode dirigir (idade >= 18 E tem carteira).

let idade = 16;
const habilitacao = true;

if(idade >= 18 && habilitacao){
    console.log("Você pode dirigir");
} else{
    console.log("Você não pode dirigir")
}