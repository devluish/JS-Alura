/*Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. 
Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. 
Por fim, imprima os resultados obtidos no console. */

const nome = "Luis";
const sobrenome = "Oliveira";

//Usando o operador + para fazer a concatenação do código
const nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

// Usando interpolação para junção de 2 strings
const nomeCompletoInterpolacao = `${nome} ${sobrenome}`;
console.log(nomeCompletoInterpolacao);
