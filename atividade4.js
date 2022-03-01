const  prompt = require ("prompt-sync") ( ) ;
let dias = prompt("Quantos dias? ");
let anos = dias/365
let meses = dias/30
console.log("O total de anos é", anos);
console.log("O total de meses é", meses);