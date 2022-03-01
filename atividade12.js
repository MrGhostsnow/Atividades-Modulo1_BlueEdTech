const prompt = require('prompt-sync') ( );
sortnum = Math.floor(Math.random() * 11);
console.log("Pensei em um número entre 0 e 10...Você consgue adivinhar? ");
let tentativas = 0
while(true){
palpite = +prompt("Digite seu palpite: ");
if (palpite !== sortnum){
    tentativas++
    console.log("VOCÊ ERROU...TENTE NOVAMENTE");
}else{
    console.log("VOCÊ ACERTOU");
    tentativas++
    console.log(`Você conseguiu é só precisou de ${tentativas} palpite/s!`);
    break;
}
}