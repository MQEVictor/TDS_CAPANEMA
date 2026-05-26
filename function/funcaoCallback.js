function executarOperacao(a,b, operacao){
    return operacao(a,b);

}

function multiplicacao(x, y){
    return x * y
}

let resultado = executarOperacao(4, 5, multiplicacao) // ele define o A e X como 4 e B e y como 5, e o operacao do Executar operacao como multiplicacao 
console.log( 'O RESULTADO É... ', resultado)