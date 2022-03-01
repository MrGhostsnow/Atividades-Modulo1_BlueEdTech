const  prompt  = require ("prompt-sync") ( ) ;
const nota1 = parseInt(prompt("Digite a 1º nota: "));
const nota2 = parseInt(prompt("Digite a 2º nota: "));
nota1 = nota1 * 4;
nota2 = nota2 * 6;
let media = (nota1 + nota2) / 2;
console.log("A media das duas notas é", media)