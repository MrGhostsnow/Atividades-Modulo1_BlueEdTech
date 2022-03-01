const prompt = require('prompt-sync')( );
let numero = 0
let par = [];
let impar = [];
while (numero < 20){
    numero++
    const numeros = +prompt("Digite um número: ");
    if (numeros % 2 == 0){
        par.push(numeros);
    }else{
        impar.push(numeros)
    }
}
console.log(par)
console.log(impar)