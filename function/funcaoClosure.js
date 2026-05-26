function criarMultiplicacao(fator){
    return function(numero){
        return numero*fator;
    }

}

let dobrar = criarMultiplicacao(2); //dobrar é igual a essa função com o fator sendo 2
let triplicar = criarMultiplicacao(3);

console.log(dobrar(7)); // ele define o numero de dentro da função dentro da função criarMultiplicação