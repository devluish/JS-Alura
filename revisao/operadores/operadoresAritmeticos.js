//Faça um cálculo de IMC com variáveis peso e altura.

//Duas variáveis indicando altura e peso
const altura = 170;
const peso = 80;

//conversão de altura em cm para metros
const alturaEmMetros = parseFloat(altura) / 100;

//calculo que se dá por peso / altura "2 ao quadrado"
const imc = (peso) / (alturaEmMetros * alturaEmMetros);

console.log(`Seu IMC é ${imc}`);
