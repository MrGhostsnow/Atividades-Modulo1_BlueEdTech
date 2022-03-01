const  prompt = require ("prompt-sync") ( ) ;
let peca1 = prompt("Qual o nome da peça? ");
let qtdp1 = parseInt(prompt("Quantas peças? "));
let precop1 = parseInt(prompt("Qual o valor da peça? "));
let peca2 = prompt("Qual o nome da peça? ");
let qtdp2 = parseInt(prompt("Quantas peças? "));
let precop2 = parseInt(prompt("Qual o valor da peça? "));
let valor = (qtdp1 * precop1) + (qtdp2 * precop2);
console.log("O valor total é", valor)