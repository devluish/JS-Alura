// 🔐 3. Validação de senha
// Peça uma senha (simulada com uma variável) e verifique:

// Se for menor que 8 caracteres → “Senha muito curta”

// Se não tiver números → “Senha precisa ter ao menos um número”

// Se tiver tudo certinho → “Senha segura!”


// VALIDADOR DE SENHA
const validadorSenha = (senha) => {
    if(senha.length < 8){
        console.log("Senha muito curta, tente novamente");
        
    } else if(!/\d/.test(senha)){
        console.log("Senha precisa ter ao menos um número");
        
    } else{
        console.log("Senha segura!");
        
        
    }
};

validadorSenha("slsdksdsd1d")