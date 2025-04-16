// 📅 5. Calculadora de dias da semana
// Crie uma função que recebe um número de 1 a 7 e retorna o nome do dia correspondente:

// 1 → Domingo

// 2 → Segunda

// ...

// 7 → Sábado

//PRIMEIRA TENTATIVA
// const diaSemana = (domingo, segunda, terca, quarta, quinta, sexta, sabado) => {

//     if(1 === domingo){
//         console.log("Domingo");
        
//     }else if(2 === segunda){
//         console.log("Segunda");
        
//     }else if(3 === terca){
//         console.log("Terça");
        
//     }else if(4 === quarta){
//         console.log("Quarta");
        
//     }else if(5 === quinta){
//         console.log("Quinta");
        
//     }else if(6 === sexta){
//         console.log("Sexta");
        
//     }else if(7 === sabado){
//         console.log("Sabado");
        
//     } else{
//         console.log("Digite um valor de 1 a 7");
        
//     }

// }


// diaSemana(1, 2, 3, 4, 5, 6, 7);


//SEGUNDA TENTATIVA:
// const diaSemana = (domingo, segunda, terca, quarta, quinta, sexta, sabado) => {
//     console.log(`${domingo}- Domingo`);
//     console.log(`${segunda}- Segunda`);
//     console.log(`${terca}- Terça`);
//     console.log(`${quarta}- Quarta`);
//     console.log(`${quinta}- Quinta`);
//     console.log(`${sexta}- Sexta`);
//     console.log(`${sabado}- Sabado`);
    
// }


// diaSemana(1, 2, 3, 4, 5, 6, 7);



//TERCEIRA TENTATIVA

function diaSemana (dia) {
    if (dia === 1) {
        return "Domingo"
        
    }else if(dia === 2){
        return "Segunda"
    
    }else if (dia === 3) {
        return "Terça"
        
    }else if(dia === 4){
        return "Quarta"
    
    }else if(dia === 5){
        return "Quinta"
    
    }else if(dia === 6){
        return "Sexta"
    
    }else if(dia === 7){
        return "Sabado"
    }
}

console.log(`1-${diaSemana(1)}`);
console.log(`1-${diaSemana(2)}`);
console.log(`1-${diaSemana(3)}`);
console.log(`1-${diaSemana(4)}`);
console.log(`1-${diaSemana(5)}`);
console.log(`1-${diaSemana(6)}`);
console.log(`1-${diaSemana(7)}`);
