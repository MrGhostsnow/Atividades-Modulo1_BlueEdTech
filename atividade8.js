const prompt = require("prompt-sync") ( );
const valor1 = +prompt("Digite o primeiro valor: ");
const valor2 = +prompt("Digite o segundo valor: ");
const multiplo = valor1/valor2 == 0;
if (valor1 > valor2 || valor1 == valor2){
    if(valor1 % valor2 == 0)
        console.log(`Os valores ${valor1} e ${valor2} são múltiplos. `);
        else{
            console.log(`Os valores ${valor1} e ${valor2} não são múltiplos. `);
    }
}   else{
        if(valor2 % valor1 == 0)
            console.log(`Os valores ${valor1} e ${valor2} são múltiplos. `);
        else{
            console.log(`Os valores ${valor1} e ${valor2} são múltiplos. `); 
        }
}