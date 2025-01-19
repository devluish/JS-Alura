/**Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança. */

// Adicionando o array vazio
const meuArray = [];

// Adicionando os 3 valores dentro do array
meuArray.push(7, 5, 8);

// Imprimindo o valor do array anterior
console.log("Valor do array sem alteração", meuArray);

// Adicionando o dobro do valor do índice 0
meuArray[0] = meuArray[0] * 2;

// Imrprimindo o valor do array com a alteração
console.log("Valor do array com alteração", meuArray);


