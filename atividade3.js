const  prompt = require ("prompt-sync") ( ) ;
let anos = parseInt(prompt("Quantos anos? "));
let meses = parseInt(prompt("Quantos meses? "));
let dias = parseInt(prompt("Quantos dias? "));
anos = anos * 365;
meses = meses * 30
let totaldias = anos + meses + dias ;
console.log("O total de dias é", totaldias);
