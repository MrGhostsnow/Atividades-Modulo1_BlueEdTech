const prompt = require('prompt-sync')( );
let numero = 0

while(true){
    numero = +prompt("Digite um número:")
    if(numero % 2 !== 0){
        console.log("O número não é par... Tente novamente");
    }else{
        console.log("O número é par");
        break
    }
}