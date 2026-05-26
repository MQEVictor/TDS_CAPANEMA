const filmeFavorito= [

    {
        nome: 'Carros',
        lancamento: '2006',
        personagemPrincipal: 'McQueen'
    },

    {
        nome: 'Toy Story',
        lancamento: '1995',
        personagemPrincipal: 'Woody'
    }

]



console.log(filmeFavorito[0]);
filmeFavorito[0].outroPersonagem = 'Mart';
console.log(filmeFavorito[0]);
filmeFavorito[0].personagemPrincipal = 'Relâmpago Amarelo';
console.log(filmeFavorito[0]);
delete filmeFavorito[0].lancamento;
console.log(filmeFavorito[0]);
console.log(filmeFavorito[1]);
delete filmeFavorito[1].lancamento;
console.log(filmeFavorito[1]);

/* FINAL */
console.log(filmeFavorito);