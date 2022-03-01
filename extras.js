const  prompt  = require ("prompt-sync") ( ) ;
let pv = prompt("Qual a quantidade de vida do monstro? ");
let dano = prompt("Qual o dano causado? ");
let turno = pv/dano
console.log("O monstro será derrotado em ",turno,"turnos");
/*while(pv - dano > 0);{
    turno = turno + 1
    console.log(turno)
}*/