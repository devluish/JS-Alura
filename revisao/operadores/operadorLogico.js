//Crie uma expressão que retorna true se o usuário for admin OU moderador.

let usuario = false;
let usuarioModerador
let usuarioAdmin = true;

const podeAcessar = usuario || usuarioAdmin || usuarioModerador;

console.log(podeAcessar);
