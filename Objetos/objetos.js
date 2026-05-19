const aluno = {
    nome: "Zanatta",
    idade: 16,
    Habilidade: "Ruim de bola",
};
console.log(aluno);
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.Habilidade);

aluno.Chuteira = 'Pro 5 Bump';

console.log(aluno.Chuteira);

delete aluno.Habilidade;
console.log(aluno);
