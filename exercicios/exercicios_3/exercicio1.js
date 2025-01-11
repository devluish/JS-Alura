/**Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, || depois realize 
 * operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada
 *  variável criada anteriormente. Exiba os resultados finais no console. */

let saldo = 0;
let deposito = 0;
let saque = 0;

//Saldo
saldo = 5000;
let valorDeposito = 300;  // Declarando valorDeposito
let valorSaque = 20;  // Declarando valorSaque
 
//Deposito
deposito = (valorDeposito + saldo);
saldo = deposito;

//Saque
saque = (saldo - valorSaque);
saldo = saque;


console.log("Saldo total: R$" + saldo);



