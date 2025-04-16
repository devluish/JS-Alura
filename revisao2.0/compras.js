// 🛒 4. Carrinho de compras simples
// Receba um valor total de compras e:

// Se for acima de R$100, dê 10% de desconto

// Se for acima de R$200, dê 20%

// Mostre o valor com o desconto aplicado

const compras = (valor) => {

    console.log(`Valor original: R$${valor}`);
    
    if(valor > 200){
        const desconto20 = valor - 20 / 100 * valor;
        console.log(`Valor da compra com desconto 1: ${desconto20}`);

    } else if(valor > 100){
        const desconto10 = valor - 10 / 100 * valor;
        console.log(`Valor da compra com desconto 2: ${desconto10}`);
        
    } else if(valor < 100){
        console.log("Não tem desconto");
    }
}

compras(38);