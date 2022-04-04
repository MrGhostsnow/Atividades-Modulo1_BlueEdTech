const  prompt = require ("prompt-sync") ( ) ;
console.log("Estamos no século VI, o jovem Arthur acaba de se levantar da cama, sem imaginar quão especial seria aquele dia... As decisões a serem tomadas mudariam sua vida para sempre!");
const pergunta1 = prompt("Você está sentindo um novo propósito Arthur? [S/N]").toUpperCase();

const pergunta2 = prompt("Você está pensando naquela pedra e na lâmina? [S/N]").toUpperCase();

const pergunta3 = prompt("Você está com as mãos na lâmina? [S/N]").toUpperCase();

const pergunta4 = prompt("A lâmina está correndo pela pedra? [S/N]").toUpperCase();

const pergunta5 = prompt("Você conseguiu cortar o pedaço de bife? [S/N]").toUpperCase();


let respostas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];
console.log(respostas)
let qtd = 0;
for (let i = 0; i < respostas.length; i++) {
    if (respostas[i] === "S") qtd++;
}
console.log(qtd);

if (qtd == 5 ){
                console.log("De fato, você conseguiu Arthur, afiou essa faca como ninguém nunca antes viu na Inglaterra!!!");
        }      
        else if(qtd == 4){
                console.log("Ehh...parece que você até conseguiu, mas não afiou a lâmina direito, e o corte saiu todo torto.");
        }
        else if(qtd == 3){
                console.log("Dessa vez foi na trave, um pouquinho mais e estava no papo!");     
        }
        else if (qtd >= 2 && qtd > 0){
                console.log("Parte de você parece querer, mas te falta força!");
        }
        else{
                console.log("Você falhou miseravelmente em sua missão Arthur... Que decepção!");
        }













