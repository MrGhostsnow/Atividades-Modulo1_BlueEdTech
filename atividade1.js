const  prompt  = require ("prompt-sync") ( ) ;
const numero1 = +prompt("Digite o 1º número: ");
const numero2 = +prompt("Digite o 2º número: ");
if (numero1 > numero2){
    console.log(`O 1º número (${numero1}) é maior que o 2º número (${numero2})`);
}   else if(numero2 > numero1){
        console.log(`O 2º número (${numero2}) é maior que o 1º número (${numero1})`);
}   else{
        console.log(`O 1º número (${numero1}) e o 2º número (${numero2}) são IGUAIS`);
    }
    