//Crie uma função que recebe uma idade e retorna se é maior de idade.

const idade = 16;

const verificaIdade = (idade) => {
    if (idade >= 18) {
        return "Você é maior de idade";
    } else {
        return "Você é menor de idade";
    }
};

console.log(verificaIdade(idade));
