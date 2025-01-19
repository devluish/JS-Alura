/**Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição
 * (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração. */

let plantasCarnivoras = ["nepenthes", "droseras", "dionaea", "sarracenia", "pinguicula"];

console.log("Array antes da mudança", plantasCarnivoras);

/** Ficar de olho, pois ao modificar o array, necessita colocar o index em número */
plantasCarnivoras[0] = "Planta do jarro: Nepenthes";
plantasCarnivoras[1] = "Planta dos cabos: Droseras";
plantasCarnivoras[2] = "Planta da boca: Dionaea";
plantasCarnivoras[3] = "Planta do tubo: Sarracenia";
plantasCarnivoras[4] = "Planta do grudenta: Pinguicula";

console.log("Array depois da mudança", plantasCarnivoras);





