/*Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.*/

// Array vazio que representa a fila de animais
const clinica = [];

clinica.push("Cachorro");
clinica.push("Gato");
clinica.push("Peixe");

// Exibindo os 3 animais adicionados
console.log("Fila", clinica.length, clinica);

// Remoção dos animais, simulando a fila andando.
clinica.pop();
console.log("Fila", clinica.length, clinica);

clinica.pop();
console.log("Fila", clinica.length, clinica);

clinica.pop();
console.log("Fila", clinica.length, clinica);




