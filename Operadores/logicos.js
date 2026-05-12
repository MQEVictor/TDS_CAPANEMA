let TemDinheiro = true;
let estaChovendo = false;
let carroEstaNaGaragem = true;

let LogicaAnd = "#AND Você vai ao Barbosa? "
LogicaAnd += TemDinheiro && estaChovendo;
console.log(LogicaAnd);

let LogicaOr = "#OR Você vai ao Barbosa? ";
LogicaOr += TemDinheiro && estaChovendo;
console.log(LogicaOr)