/*Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e 
peça o nome e nota de cada um. Armazene as informações em duas listas separadas 
e no final imprima o nome e a 
nota correspondente de cada aluno, e a média total da notas.*/
const prompt = require('prompt-sync')( );
let qtdalunos = +prompt("Quantos alunos você quer cadastrar?" );
let nome = [];
let nota = [];
let media = 0;
let soma = 0;
while(qtdalunos > 0){
    qtdalunos--
    per1 = prompt("Qual o nome do aluno/a?");
    per2 = +prompt("Qual a nota do aluno/a?");
    nome.push(per1);
    nota.push(per2);
    
}
for(var i = 0; i < nota.length; i++) {
    soma += nota[i];
}
media = soma/nome.length;
console.log(nome);
console.log(nota);
console.log(media);