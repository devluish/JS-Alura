/*Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.*/

const plantasCarnivoras = [];

plantasCarnivoras.push(1);
plantasCarnivoras.push(2);
plantasCarnivoras.push(3);

console.log("Array não modificado", plantasCarnivoras);

plantasCarnivoras[0] = "Nepenthes";
plantasCarnivoras[1] = "Droseras";
plantasCarnivoras[2] = "Dionaea";

console.log("Array modificado", plantasCarnivoras);


