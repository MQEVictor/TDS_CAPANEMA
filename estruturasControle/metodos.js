const valores = [1, 2, 3, 4, 5, 8];
console.log(valores);


valores[0] = 100;
console.log(valores);
console.log(valores.includes(200));

valores.push(200);
console.log(valores);


console.log(valores.indexOf(8));
console.log(valores.includes(200));
console.log('Os números escolhidos são: ' + valores.join(', '))

const numeros = [10, 20, 30]
console.log(valores.concat(numeros))