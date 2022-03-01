const  prompt  = require ("prompt-sync") ( ) ;
let valor = prompt("Qual o valot total da compra? ");
let nota = prompt("Quanto o cliente pagou? ");
let troco = nota - valor;
if (troco > 0){
    console.log("O troco do cliente é", troco);
}
    else if (troco < 0) {
        console.log("O valor recebido está incorrerto.Confira novamente! ");    
    }
    else{
        console.log("Não haverá troco")
    }
