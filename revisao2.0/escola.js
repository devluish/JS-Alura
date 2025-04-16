// 🎓 2. Nota do aluno
// Crie uma função que recebe a nota de um aluno e:

// Se for menor que 5 → “Reprovado”

// De 5 a 7 → “Recuperação”

// Acima de 7 → “Aprovado”


const matematica = 6;
const portugues = 2;
const biologia = 6;
const fisica = 5;
const edFisica = 3; 

const verificaNota = (matematica, portugues, biologia, fisica, edFisica) => {
    const somaNota = matematica + portugues + biologia + fisica + edFisica;
    const mediaNota = somaNota / 5;

    if(mediaNota <= 5){
        console.log("REPROVADO");
        
    }else if(mediaNota <= 7){
        console.log("RECUPERAÇÃO");
        
    }else{
        console.log("APROVADO!");
        
    }

}

verificaNota(matematica, portugues, biologia, fisica, edFisica);