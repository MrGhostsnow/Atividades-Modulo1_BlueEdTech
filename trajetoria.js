const  prompt = require ("prompt-sync") ( ) ;
console.log("Estamos no século VI, o jovem Arthur acaba de se levantar de sua cama, sem imaginar qual especial seria aquele dia");
const pergunta1 = prompt("Você está sentindo um novo propósito Arthur? [S/N]");
const pergunta1Upper = pergunta1.toUpperCase()
const pergunta2 = prompt("Você está pensando naquela pedra e na lâmina? [S/N]");
const pergunta2Upper = pergunta2.toUpperCase()
const pergunta3 = prompt("Você está com as mãoS na lâmina? [S/N]");
const pergunta3Upper = pergunta3.toUpperCase()
const pergunta4 = prompt("A lâmina está correndo pela pedra? [S/N]");
const pergunta4Upper = pergunta4.toUpperCase()
const pergunta5 = prompt("Você conseguiu cortar o pedaço de bife? [S/N]");
const pergunta5Upper = pergunta5.toUpperCase()

let respostas = [pergunta1Upper, pergunta2Upper, pergunta3Upper, pergunta4Upper, pergunta5Upper];
console.log(respostas)
var qtd = 0;
for (var i = 0; i < respostas.length; i++) {
    if (respostas[i] === "S") qtd++;
}
console.log(qtd);

if (qtd == 5 ){
                console.log("De fato, você conseguiu Arthur, afiou essa faca como ninguem antes viu na Inglaterra!");
        }      
        else if(qtd == 4){
                console.log("Ehh...parece que você até conseguiu, mas não afiou direito");
        }
        else if(qtd == 3){
                console.log("Dessa vez foi na trave, um pouquinho mais e estava no papo!");     
        }
        else if (qtd >= 2 && qtd > 0){
                console.log("Parte de você parece querer, mas te falta força!");
        }
        else{
                console.log("Você falhou miseravelmente em sua missão...Que decepção");
        }













