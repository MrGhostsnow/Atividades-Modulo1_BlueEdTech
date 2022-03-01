//Faça um Programa que peça a idade e a altura de 5 pessoas, armazene 
//cada informação no seu respectivo array. Imprima a média de idade e de altura.
const prompt = require('prompt-sync')( );
let idade = [];
let altura = [];
let numero = 0;
while (numero < 5 ){
    numero++
    per1 = +prompt("Digite uma idade: ");
    per2 = +prompt("Digite uma altura:");
    idade.push(per1);
    altura.push(per2);
}
console.log(idade);
console.log(altura)