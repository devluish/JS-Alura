// 1. Sistema de semáforo
// Crie uma função que recebe uma string com a cor de um semáforo ("verde", "amarelo" ou "vermelho") e retorna a ação que o motorista deve tomar:
// Verde: “Pode seguir”
// Amarelo: “Atenção”
// Vermelho: “Pare”



// const farolVerde = "semaforo  aberto, pode avançar!";
// const farolAmeralo = "semaforo  amarelo, reduza a velocidade";
// const farolVermelho = "semaforo  fechado, parado!"

// const semaforo = (farolVerde, farolAmeralo, farolVermelho) => {
//     console.log(farolVerde);
//     console.log(farolAmeralo);
//     console.log(farolVermelho);
// }
    
// semaforo(farolVerde,farolAmeralo,farolVermelho);

// const semaforo = cor => {
//     if(cor === "verde"){
//         console.log("Pode avançar");
//     } else if(cor === "amarelo"){
//         console.log("Atenção, vai fechar!");
//     } else if(cor === "vermelho"){
//         console.log("Fechado!");
//     } else{
//         console.log("Cor errada, digite a cor certa");
        
//     }
// }
// semaforo("verde");



const semaforo = (cor) => {
    if(cor === "vermelho"){
        console.log("Parado");
    
    } else if(cor === "amarelo"){
        console.log("Atenção");

    } else if(cor === "verde"){
        console.log("Avança");
        
    } else{
        console.log("Cor errada");
        
    }
}

semaforo("amarelo")