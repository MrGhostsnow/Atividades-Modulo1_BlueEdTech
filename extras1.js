const  prompt  = require ("prompt-sync") ( ) ;
let valor = parseInt(prompt("Qual o valor da conta?"));
let taxa10 = valor * (10/100);
let total = valor + taxa10;
console.log("O valor total da conta é",total.toFixed(2));