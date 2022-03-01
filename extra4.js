const prompt = require('prompt-sync') ( );
sortnum = Math.floor(Math.random() * 11);
console.log("Pensei em um número entre 0 e 10...Você consgue adivinhar? ");
palpite = +prompt("Digite seu plapite: ")
if (palpite === sortnum){
    console.log("VOCÊ ACERTOU!!");
}
    else{
        console.log(`VOCÊ ERROU!! pensei no número ${sortnum}`);
    }