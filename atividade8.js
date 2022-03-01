const prompt = require("prompt-sync") ( );
r1 = +prompt("Primeiro segmento: ");
r2 = +prompt("Segundo segmento: ");
r3 = +prompt("Teceiro segmento: ");

if (r1 < r2 + r3 && r2 < r1 + r3 && r3 < r1 + r2){
    console.log("Os segmentos acima podem formar Triângulo");
    if (r1 == r2 == r3){
        console.log("Equilátero");
    }
        else if (r1 != r2 != r3 != r1){
            console.log("Escaleno");
        }   else
            console.log("Isósceles")
    }
        else{
    console.log("Os segmentos acima não podem formar triângulo");}
