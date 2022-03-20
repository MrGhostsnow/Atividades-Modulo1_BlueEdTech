const prompt = require('prompt-sync')( );
const escolha = ["pedra", "papel", "tesoura", "lagarto", "spock"];
let vitoriacomp = 0
let vitoriajoga = 0
console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
console.log("Vamo jogar UM JOPKENPÔ diferente...");
console.log(`As regras são as seguintes: 
Tesoura corta papel
Papel cobre pedra
Pedra esmaga lagarto
Lagarto envenena Spock
Spock derrete tesoura
Tesoura decapita lagarto
Lagarto come papel
Papel refuta Spock
Spock vaporiza pedra
Pedra amassa tesoura`)
console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
function jogo(){
let rodadas = +prompt("Quantas rodadas nosso jogo terá? ");
console.log(`As opções são:
    1 - pedra
    2 - papel
    3 - tesoura
    4 - lagarto
    5 - spock
    `);
for(let i = 0; i < rodadas; i++){
    //if(rodadas > 0){
        const jogador = prompt("Qual opção você escolhe? ");
        const computador = escolha[Math.floor(Math.random() * escolha.length)];
        //rodadas--;
        if(jogador === "tesoura" && computador === "papel"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            tesoura corta papel`);
            console.log("VOCÊ VENCEU A RODADA!!");
            vitoriajoga++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(jogador === "papel" && computador === "pedra"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            papel cobre pedra`);
            console.log("VOCÊ VENCEU A RODADA!!");
            vitoriajoga++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(jogador === "pedra" && computador === "lagarto"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            pedra esmaga lagarto`);
            console.log("VOCÊ VENCEU A RODADA!!");
            vitoriajoga++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(jogador === "lagarto" && computador === "spock"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            lagarto envenena spock`);
            console.log("VOCÊ VENCEU A RODADA!!");
            vitoriajoga++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(jogador === "spock" && computador === "tesoura"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            spock derrete tesoura`);
            console.log("VOCÊ VENCEU A RODADA!!");
            vitoriajoga++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(jogador === "tesoura" && computador === "lagarto"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            tesoura decapita lagarto`);
            console.log("VOCÊ VENCEU A RODADA!!");
            vitoriajoga++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(jogador === "lagarto" && computador === "papel"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            lagarto come papel`);
            console.log("VOCÊ VENCEU A RODADA!!");
            vitoriajoga++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(jogador === "papel" && computador === "spock"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            papel refuta spock`);
            console.log("VOCÊ VENCEU A RODADA!!");
            vitoriajoga++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(jogador === "spock" && computador === "pedra"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            spock vaporiza pedra`);
            console.log("VOCÊ VENCEU A RODADA!!");
            vitoriajoga++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if (jogador === "pedra" && computador === "tesoura"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            pedra amassa tesoura`);
            console.log("VOCÊ VENCEU A RODADA!!");
            vitoriajoga++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(computador === "tesoura" && jogador === "papel"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            tesoura corta papel`);
            console.log("O COMPUTADOR VENCEU A RODADA!!");
            vitoriacomp++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(computador === "papel" && jogador === "pedra"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            papel cobre pedra`);
            console.log("O COMPUTADOR VENCEU A RODADA!!");
            vitoriacomp++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(computador === "pedra" && jogador === "lagarto"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            pedra esmaga lagarto`);
            console.log("O COMPUTADOR VENCEU A RODADA!!");
            vitoriacomp++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(computador === "lagarto" && jogador === "spock"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            lagarto envenena spock`);
            console.log("O COMPUTADOR VENCEU A RODADA!!");
            vitoriacomp++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(computador === "spock" && jogador === "tesoura"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            spock derrete tesoura`);
            console.log("O COMPUTADOR VENCEU A RODADA!!");
            vitoriacomp++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(computador === "tesoura" && jogador === "lagarto"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            tesoura decapita lagarto`);
            console.log("O COMPUTADOR VENCEU A RODADA!!");
            vitoriacomp++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(computador === "lagarto" && jogador === "papel"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            lagarto come papel`);
            console.log("O COMPUTADOR VENCEU A RODADA!!");
            vitoriacomp++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(computador === "papel" && jogador === "spock"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            papel refuta spock`);
            console.log("O COMPUTADOR VENCEU A RODADA!!");
            vitoriacomp++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if(computador === "spock" && jogador === "pedra"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            spock vaporiza pedra`);
            console.log("O COMPUTADOR VENCEU A RODADA!!");
            vitoriacomp++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }else if (computador === "pedra" && jogador === "tesoura"){
            console.log(`Você escolheu ${jogador} e o computador escolheu ${computador}
            pedra amassa tesoura`);
            console.log("O COMPUTADOR VENCEU A RODADA!!");
            vitoriacomp++
            console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
        }
    }if(i = rodadas){
        const continuar = prompt("Você quer continuar? [s/n] ");
        if (continuar === "s"){
             jogo();
        }else{
             console.log("Vamos ver os resultados!!!") ;
            //break;
        } 
    }
}








jogo();
console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");
console.log(`       TABELA DE VITORIAS
    JOGADOR ${vitoriajoga} X ${vitoriacomp} COMPUTADOR`);
if (vitoriajoga > vitoriacomp){
     console.log("PARABÉNS, VOCÊ DERROTOU O COMPUTADOR!!");
}else if(vitoriajoga === vitoriacomp){
    console.log("O INACREDITÁVEL ACONTECEU, EMPATE!!");
}else{
    console.log("NÃO FOI DESSA VEZ... VITÓRIA DO COMPUTADOR");
}
console.log("-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*");