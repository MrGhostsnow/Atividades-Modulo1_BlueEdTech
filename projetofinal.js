const prompt = require("prompt-sync")();

console.log("-----------------------------------------------");
console.log("         BEM-VINDO AO DILEMA DO HERÓI         ");
console.log("-----------------------------------------------");
console.log();
console.log(`Nossa jornada se inicia em um planeta de outra galáxia,
o 14 Herculis b, e você faz parte de seu povo os Sotíras.
Graças as condições naturais desse planeta e os avanços tecnológico e medicinal, algumas crinças nasceram com a predisposição a receber um super-poder, entre três, de sua escolha
(apenas um, é o maxímo que o corpo suporta). Todos os poderes iniciam com no nível 50 e chegam até o 110, CADA ESCOLHA IRÁ ALTERAR SEU NÍVEL DE PODER.
Mas não ache que esses poderes são dados sem motivo, essas crianças são treinadas para quando atingirem idade suficiente, lutar a guerra dos Sotíras contra os Apostates, 
que já perdura por 50 anos... `);
console.log();
console.log(`Você acaba de completar 5 anos, a idade da escolha
Então, aqui estão suas opções: (digite o número)
1- Super força
Esse poder é da classe dos "Sotíras de pedra", concede força de combate sobre-humana, os grandes guerreiros da linha de frente.
Entretanto, geralmente seus portadores não apresentam capacidade intelectual avançada.

2- Telecinese
Essa poder é da classe dos "Sotíras de vento", concede a habilidade de mover objetos com a mente, os magos de batalha.
Entretanto, os portadores desse poder por usarem tanto a mente, apresentam geralmente o corpo fraco.

3- Umbracinese
Esse poder é da classe dos "Sotíras do vácuo, concede a habilidade de manipular a escuridão e as sombras, os demônios da guerra.
Entretanto, os portadores desse poder absorvem a escuridão é características maléficas podem surgir.`);

let escolha = +prompt();

if (escolha === 1) {
  escolha = "Super força";
} else if (escolha === 2) {
  escolha = "Telecinese";
} else if (escolha === 3) {
  escolha = "Umbracinese";
} else if (escolha !== 1 || escolha !== 2 || escolha !== 3) {
  console.log = "Opção Inválida";
}

console.log(`Você escolheu ${escolha}
Você e seus companheiros de poder serão levados para treinamento e afastados de suas famílias`);

poderSuperForca = {//Variáveis de status de poder, alteradas pelas decisões do jogador
  forcaModificada: 50,
  estrategia: 0,
  aumentarForca: function (valor = 0) {
    this.forcaModificada += valor;
    console.log(
      `Seu nível de força foi aumentado em ${valor} totalizando: ${this.forcaModificada}`
    );
    return this.forcaModificada;
  },
  diminuirForca: function (valor = 0) {
    this.forcaModificada -= valor;
    console.log(
      `Seu nível de força foi diminuido em ${valor} totalizando: ${this.forcaModificada}`
    );
    return this.forcaModificada;
  },
  aumentarEstrategia: function (valor = 0) {
    this.estrategia += valor;
    console.log(
      `Seu nível atual de estratégia foi aumentado em ${valor} totalizando: ${this.estrategia}`
    );
    return this.estrategia;
  },
  diminuirEstrategia: function (valor = 0) {
    this.estrategia -= valor;
    console.log(
      `Seu nível atual de estratégia foi diminuido em ${valor} totalizando: ${this.estrategia}`
    );
    return this.estrategia;
  },
};

poderUmbracinese = {
  umbracineseModificada: 50,
  aumentarUmbracinese: function (valor = 0) {
    this.umbracineseModificada += valor;
    console.log(
      `Seu nível de Umbracinese foi aumentado em ${valor} totalizando: ${this.umbracineseModificada}`
    );
    return this.umbracineseModificada;
  },
  diminuirUmbracinese: function (valor = 0) {
    this.umbracineseModificada -= valor;
    console.log(
      `Seu nível de Umbracinese foi diminuido em ${valor} totalizando: ${this.umbracineseModificada}`
    );
    return this.umbracineseModificada;
  },
};

poderTelecinese = {
  telecineseModificada: 50,
  forca: 0,
  aumentarTelecinese: function (valor = 0) {
    this.telecineseModificada += valor;
    console.log(
      `Seu nível de Telecinese foi aumentado em ${valor} totalizando: ${this.telecineseModificada}`
    );
    return this.telecineseModificada;
  },
  diminuirTelecinese: function (valor = 0) {
    this.telecineseModificada -= valor;
    console.log(
      `Seu nível de Telecinese foi diminuido em ${valor} totalizando: ${this.telecineseModificada}`
    );
    return this.telecineseModificada;
  },
  aumentarForca: function (valor = 0) {
    this.forca += valor;
    console.log(
      `Seu nível atual de força foi aumentado em ${valor} totalizando: ${this.forca}`
    );
    return this.forca;
  },
  diminuirForca: function (valor = 0) {
    this.forca -= valor;
    console.log(
      `Seu nível atual de força foi diminuido em ${valor} totalizando: ${this.forca}`
    );
    return this.forca;
  },
};

function mudardeLado() {
  console.log(`Agora você é um Apostate ("Aquele que deixou de possuir a fé que antes possuía e professava").
Sua luta agora será diferente da qual você foi treinado...`);
}

function respostaSisifo() {
  console.log(`"Essa guerra...
        Ela não é por mim, é pelo que você foi, eles fingem te dar uma escolha, mas entre 3 opções.
        Nem sempre existiu alguém contra quem lutar, mas o medo fez com que eles criassem um inimigo, um inimigo que só quer ajudar aqueles que não tem realmente uma escolha".`);
}

function tempoPassado() {
  console.log(`Se passaram 10 anos...
    Você atingiu a idade suficiente para ir para a guerra
    Seu objetivo é salvar 14 Herculis b da ameaça dos Apostates, antigos Sotíras que se rebelaram por serem contrários ao poder em humanos.
    ---------------------------------------------------------------------------------------------------------------------------------------`);
}

function decisaoGuerra() {
  console.log(
    `A guerra é um campo de decisões difíceis, e você tomou uma, espero que esteja bem consigo mesmo...`
  );
}

function morteHeroi() {
  console.log(`Nem todos os Heróis vivem o suficiente para fazer historia...
    Esse é o fim da sua jornada.`);
}

function morteHercules() {
  console.log(`Esse é o fim da sua curta jornada como Herói.
Talvez um nome tão pesado carregue consigo uma maldição...`);
}

function esperancaHercules() {
  console.log(`A esperança é a última que morre ou você apenas não tem coragem de morrer?
    Iremos descobrir...`);
}

function morteSisifo() {
  console.log(`Esse é o fim da guerra, sem o seu líder os Apostates enfraquecidos foram facilmente derrotados.
    Você é o grande Herói de 14 herculis b.`);
}

passagemDia = { //variável de alteração de tempo
  diaAtual: 0,
  passarDia: function (valor = 0) {
    for (let i = this.dia; ; i++) {
      this.diaAtual += valor;
      console.log(`Esse é o ${this.diaAtual}º de guerra`);
      return this.diaAtual;
    }
  },
};

while (true) {
  if (escolha === "Super força") {
    console.log(`Você iniciou seu treinamento, e com o passar do tempo enquanto aprimora seu poder percebe que não é muito mais que um amontoado de músculos.
    Então lhe é dada a opção de desviar um pouco do seu treinamento para obter inteligência e se tornar a soma de músculos e estratégia
    ou só focar na força e se tornar o mais forte entre os demais.
    Você decide:
    1- Força e estratégia
    2- Mais força`);
    let resposta2 = +prompt();
    console.clear();
    if (resposta2 === 1) {
      //VIA 1 PODER 1
      console.log(
        "------------------------------------------------------------------------------------------------------------------------------"
      );
      forcaModificada = poderSuperForca.aumentarForca(20);
      estrategia = poderSuperForca.aumentarEstrategia(50);
      console.log(
        `De fato, sua força é menor do que a de seus companheiros, mas você se tornou o líder dos "Sotíras de pedra.`
      );
      tempoPassado();
      diaAtual = passagemDia.passarDia(1);
      console.log(`Você jovem general dos "Sotíras de pedra" é enviado ao QG e já se depara com sua primeira grande decisão...
Os Apostates estão avançando suas tropas até seu território.
    Você decide:
    1- Esperar para atacar em seu território
    2- Avança suas tropas antes que o inimigo chegue`);
      let resposta3 = +prompt();
      console.clear();
      if (resposta3 === 1) {
        console.log(`"Ninguém conhece o seu território como o seu povo"
    Sua primeira batalha termina em vitória. `);
        forcaModificada = poderSuperForca.aumentarForca(10);
        estrategia = poderSuperForca.aumentarEstrategia(30);
        console.log(
          "---------------------------------------------------------------------------------------------------------------------"
        );
        console.log(`Seus companheiros estão animados pela primeira batalha ter terminado em vitória!!!!
    E você, como se sente?
    1-Animado e confiante
    2-Centrado e pensativo`);
        let resposta4 = +prompt();
        console.clear();
        if (resposta4 === 1) {
          console.log(
            `Se acalme jovem general, a guerra não acabou e seu inimigo é forte.`
          );
          estrategia = poderSuperForca.diminuirEstrategia(20);
        } else if (resposta4 === 2) {
          console.log(
            `A guerra não acabou e você está consciente da sua posição.`
          );
          estrategia = poderSuperForca.aumentarEstrategia(10);
        }
      } else if (resposta3 === 2) {
        console.log(`Os Apostates previram sua investida precipitada.
            Sua primeira batalha termina em derrota.`);
        forcaModificada = poderSuperForca.diminuirForca(20);
        estrategia = poderSuperForca.diminuirEstrategia(20);
        console.log(
          "---------------------------------------------------------------------------------------------------------------------"
        );
        console.log(`Seus companheiros estão abatidos pela primeira batalha resultar em derrota.
                E você, como se sente?
                1- Consciente e fortalecido
                2- Desanimado e enfraquecido `);
        let resposta5 = +prompt();
        console.clear();
        if (resposta5 === 1) {
          console.log(
            `Nem todas as batalhas serão vencidas, aprenda algo na derrota e esteja preparado para a guerra.`
          );
          forcaModificada = poderSuperForca.aumentarForca(10);
          estrategia = poderSuperForca.aumentarEstrategia(40);
        } else if (resposta5 === 2) {
          console.log(
            `Se você não compreende a derrota, talvez não devesse estar aqui.`
          );
          forcaModificada = poderSuperForca.diminuirForca(5);
          estrategia = poderSuperForca.diminuirEstrategia(15);
        }
      }
      console.log(
        "-------------------------------------------------------------------------------------------------------------------------"
      );
      console.log(`5 anos se passaram... 
Você venceu e perdeu batalhas. E, agora chegou a vez da sua última...
Uma sangrenta batalha, cercada de caos e mortes de ambos os lados, porém seu objetivo é chegar até o líder dos Apostates.
Você avança o campo de batalha e encontra Sísifo, o líder Apostate, e o embate se inicia...
Uma luta forte e justa ocorre, até que Sísifo comete um deslize e você o imobiliza, a vitória da guerra está em suas mãos, com apenas um golpe será dado o fim ao caos.
Mas você escuta um murmúrio de Sísifo: "Você não entende..."
    Qual a sua reação?
    1- Pergunta o que Sísifo quer dizer
    2- Não dá ouvidos e o mata `);
      let resposta6 = +prompt();
      console.clear();
      if (resposta6 === 1) {
        console.log(`Seu nível de força: ${forcaModificada}`);
        console.log("Seu nível de força não se altera com essa decisão");
        estrategia = poderSuperForca.diminuirEstrategia(20);
        respostaSisifo();

        console.log(`As palavras de Sísifo ecoam em sua mente.
    1- Você está confortável com essa realidade e finalmente mata Sísifo
    2- Deixa que ele viva e se une a causa`);
        let resposta7 = +prompt();
        console.clear();
        if (resposta7 == 1) {
          console.log(`Seu nível de força final: ${forcaModificada}`);
          console.log(`Seu nível de estratégia final: ${estrategia}`);
          morteSisifo();
          break;
        } else if (resposta7 === 2) {
          console.log(`Seu nível de força final: ${forcaModificada}`);
          console.log(`Seu nível de estratégia final: ${estrategia}`);
          mudardeLado();
          break;
        }
      } else if (resposta6 === 2) {
        console.log(`Seu nível de força final: ${forcaModificada}`);
        console.log(`Seu nível de estratégia final: ${estrategia}`);
        console.log(`Esse é o fim da guerra, sem o seu líder os Apostates enfraquecidos foram facilmente derrotados.
                        Você é o grande Herói de 14 herculis b.`);
        break;
      }
    } else if (resposta2 === 2) {
      tempoPassado();
      diaAtual = passagemDia.passarDia(1);
      forcaModificada = poderSuperForca.aumentarForca(30);
      console.log(`Você, o guerreiro mais forte entre os Sotíras, foi enviado para sua primeira batalha,
devido a sua força descomunal, sua posição é a mais avançada em campo.
Você está no epicentro do campo de batalha, o caos te cerca, muitos corpos pelo chão, seu pelotão está com muitas baixas e cabe a você 
como símbolo de força para seus companheiros tomar uma decisão
        1- Usar de toda força bruta e avançar
        2- Aceitar a situação e recuar para se recuperar `);
      let resposta8 = +prompt();
      console.clear();
      if (resposta8 === 1) {
        console.log(`Não é de se esperar outra decisão do "Hércules", sua força fez alguma diferença no avanço, mas guerras não se vencem sozinho
e você foi capturado...`);
        forcaModificada = poderSuperForca.diminuirForca(15);
        console.log(
          "--------------------------------------------------------------------------------------------------------------------------"
        );
        console.log(`Seu treinamento lhe ensinou como agir em caso de captura...
Seu molar é na verdade um recipiente com veneno, que te matará em segundos.
    Você irá tomá-lo?
        1- Sim
        2- Não`);
        let resposta9 = +prompt();
        console.clear();
        if (resposta9 === 1) {
          forcaModificada = 0;
          console.log(`Seu nível de força final: ${forcaModificada}`);

          morteHercules();
          break;
        } else if (resposta9 === 2) {
          esperancaHercules();
          forcaModificada = poderSuperForca.diminuirForca(5);

          console.log(
            "-----------------------------------------------------------------------------------------------------------------------"
          );
          diaAtual = passagemDia.passarDia(1);
          console.log(`Após um dia preso você é levado diretamente a Sísifo, o líder dos Apostates.
        Sísifo lhe recebe e logo diz:
            "Quem diria, estamos na presença de Hércules, sempre quis conhecer um Herói.
            Você sabe o real motivo da sua luta, Herói?...
            Quer saber?" 
                1- Sim
                2- Não `);
          let resposta10 = +prompt();
          console.clear();
          if (resposta10 === 1) {
            respostaSisifo();
            console.log("Essa decisão não altera sua força");
            console.log(`Seu nível de força é: ${forcaModificada}`);
            console.log(
              "-----------------------------------------------------------------------------------------------------------------------"
            );
            console.log(`Essas palavras ecoam na sua mente e questionamentos começam a surgir.
        Você é um guerreiro fiel a sua pátria ou as palavras de Sísifo fazem sentido?
        Qual sua decisão:
            1- Tentar uma última investida contra Sísifo
            2- Se juntar a causa`);
            let resposta11 = +prompt();
            console.clear();
            if (resposta11 === 1) {
              console.log(`Você escolheu a força durante toda sua jornada... E agora não poderia ser diferente,
                        um Herói deve terminar sua msssão ou ela deve terminar com ele.
                        E assim ela o fez...
                        Esse é o fim da sua jornada como Herói`);
              forcaModificada = 0;
              console.log(`Seu nível de força final: ${forcaModificada}`);
              break;
            } else if (resposta11 === 2) {
              console.log(`Seu nível de força final: ${forcaModificada}`);
              mudardeLado();
              break;
            }
          } else if (resposta10 === 2) {
            forcaModificada = poderSuperForca.aumentarForca(20);
            console.log(
              `Em um momento de intensa bravura ou extrema burrice você ataca Sísifo, e seus guardas lhe matam...`
            );
            forcaModificada = 0;
            console.log(`Seu nível de força final: ${forcaModificada}`);
            morteHercules();
            break;
          }
        }
      } else if (resposta8 === 2) {
        forcaModificada = poderSuperForca.aumentarForca(15);
        console.log(`Para uma parede de músculos até que você pensou bem nessa decisão,
    perder a batalha não significa perder a guerra e você viverá mais um dia para fazer a diferença`);
        console.log(
          "-----------------------------------------------------------------------------------------------------------------------"
        );
        console.log(
          `Ao retornar para a base você atingido criticamente por um tiro acidental e morre...`
        );
        morteHercules();
        forcaModificada = 0;
        console.log(`Seu nível de força final: ${forcaModificada}`);
        break;
      }
    }
  } else if (escolha === "Telecinese") {
    console.log(`Os anos estão passando enquanto você aprimora seu poder.
    Mas, ao avançar em seu treinamento, nota o desequilíbrio que seu poder lhe traz, sem força físca, um alvo fácil no comabte corpo a corpo.
    Então, lhe é dada a opção de desviar um pouco seu treinamento e alcançar um nível de força física útil ou apenas focar na Telecinese e atingir 
    um elevado nível de poder.
    Você escolhe:
    1- Poder e força
    2- Mais poder `);
    let resposta12 = +prompt();
    if (resposta12 === 1) {
      //VIA 1 PODER 2
      console.log(
        "------------------------------------------------------------------------------------------------------------------------------"
      );
      telecineseModificada = poderTelecinese.aumentarTelecinese(20);
      forca = poderTelecinese.aumentarForca(50);
      console.log(`Mesmo que longe do real equilíbrio, a força adquirida pode lhe ajudar em algum momento
    Veremos...`);
      console.log(
        "------------------------------------------------------------------------------------------------------------------------------"
      );
      tempoPassado();
      diaAtual = passagemDia.passarDia(1);
      console.log(`Você, jovem soldado, irá iniciar sua trajetória de batalhas hoje.
    Seu comandante lhe designou para a vanguarda da tropa.
    "Já que você escolheu ter força, meu jovem, vamos te colocar onde ela não é necessária"
    
    A batalha se inicia, mas seu posto é longe da verdadeira ação.
    Então lhe surge o impulso de avançar e desobedecer as ordens, mas você é um soldado e deve ficar em seu posto e obedecer o comandante.
    Qual opção você escolhe:
    1- Avançar e desobedecer
    2- Esperar e obedecer`);
      let resposta13 = +prompt();
      console.clear();
      if (resposta13 === 1) {
        console.log(
          "------------------------------------------------------------------------------------------------------------------------------"
        );
        telecineseModificada = poderTelecinese.aumentarTelecinese(5);
        forca = poderTelecinese.aumentarForca(5);
        console.log(`A desobediência lhe cai bem, e você avança em direção a batalha,
sua força física aliada a sua Telecinese formam uma dupla mortal no campo de batalha,
e sua ajuda concebe vitória aos Sotíras.
        
    Seu comandante fica impressionado com seu desempenho em batalha e te escolhe para liderar uma emboscada a um grupo desgarrado de Apostates.
        Sua resposta é:
        1- Aceita a missão
        2- Nega a missão`);
        let resposta14 = +prompt();
        console.clear();
        if (resposta14 === 1) {
          console.log(
            "------------------------------------------------------------------------------------------------------------------------------"
          );
          telecineseModificada = poderTelecinese.aumentarTelecinese(15);
          forca = poderTelecinese.aumentarForca(15);
          diaAtual = passagemDia.passarDia(1);
          console.log(`Você e mais 5 "Sotíras de vento" invadem uma instalação dos Apostates.
Chegando no local você encontra o líder dos Apostates, Sísifo, cercado por guardas,
de imediato um combate violente irrompe e todos os seus companheiros são mortos, restando apenas você...
Cabe a você decidir se irá se render ou terminar sua missão e vingar seus companheiros.
        Qual opção você escolhe:
        1- Se rende
        2- Ataca`);
          let resposta15 = +prompt();
          console.clear();
          if (resposta15 === 1) {
            console.log(
              "------------------------------------------------------------------------------------------------------------------------------"
            );
            console.log("Essa decisão não altera seus niveis de poder");
            console.log(
              `Esse é seu nível de poder atual: ${telecineseModificada}`
            );
            console.log(`Esse é seu nível atual de força: ${forca}`);
            console.log(`É importante reconhecer a derrota, mesmo que momentânea.
Você viverá mais um dia, Sísifo quer falar com você.
Mas uma noite na prisão para se acalmar será necessária.`);
            diaAtual = passagemDia.passarDia(1);
            console.log(`Sísifo te chama para conversar, ele te garante que não há o que você possa fazer para atacá-lo, e diz:
"Eu sei que seu treinamento lhe ensinou a lidar com a situação de captura e que seu molar contém um veneno que lhe mata em segundos,
te darei a opção de usá-lo agora e morrer fiel a sua causa.
        Qual opção você escolhe:
        1- Tomar o veneno
        2- Escutar Sísifo`);
            let resposta16 = +prompt();
            console.clear();
            if (resposta16 === 1) {
              console.log(
                "------------------------------------------------------------------------------------------------------------------------------"
              );
              telecineseModificada = 0;
              console.log(
                `Esse é seu nível final de poder: ${telecineseModificada}`
              );
              forca = 0;
              console.log(`Esse é seu nível final de força: ${forca}`);
              console.log(`O fim da sua jornada como Herói...
                        Morreu fiel ao que supostamente acreditava e será lembrado por sua bravura.`);
              break;
            } else if (resposta16 === 2) {
              console.log(
                "------------------------------------------------------------------------------------------------------------------------------"
              );
              telecineseModificada = poderTelecinese.aumentarTelecinese(5);
              forca = poderTelecinese.aumentarForca(5);
              console.log(`Sísifo então diz:
                    "Muito bem, parece que não lavaram seu cérebro o suficiente...`);
              respostaSisifo();
              console.log(`As palavras de Sísifo ecoam em sua mente, questionamentos começam a surgir, mas você não têm muito tempo para se decidir.
Sísifo te cobra uma posição.
    Qual você escolhe?
        1- Sísifo não tem razão
        2- Sísifo tem razão`);
              let resposta17 = +prompt();
              console.clear();
              if (resposta17 === 1) {
                console.log(
                  "------------------------------------------------------------------------------------------------------------------------------"
                );
                telecineseModificada = 0;
                console.log(
                  `Esse é seu nível final de poder: ${telecineseModificada}`
                );
                forca = 0;
                console.log(`Esse é seu nível final de força: ${forca}`);
                console.log(`Sísifo diz:
    "Parece que eu estava enganado, o cérebro desse já era, matem-no`);
                console.log(`O fim da sua jornada como Herói...
    Morreu fiel ao que supostamente acreditava e será lembrado por sua bravura.`);
                break;
              } else if (resposta17 === 2) {
                console.log(
                  "------------------------------------------------------------------------------------------------------------------------------"
                );
                mudardeLado();
                break;
              }
            }
          } else if (resposta15 === 2) {
            console.log(
              "------------------------------------------------------------------------------------------------------------------------------"
            );
            telecineseModificada = poderTelecinese.diminuirTelecinese(5);
            forca = poderTelecinese.aumentarForca(10);
            console.log(`Não se espera menos de um Herói, seus esforços são louváveis.
Muitos Apostates são mortos por suas mãos, mas não se vence uma guerra sozinho,
e você é dominado pela força inimiga e morto.
    A historia já mostrou que a vida pode ser cruel com Heróis...`);
            console.log(
              "------------------------------------------------------------------------------------------------------------------------------"
            );
            telecineseModificada = 0;
            console.log(
              `Esse é seu nível final de poder: ${telecineseModificada}`
            );
            forca = 0;
            console.log(`Esse é seu nível final de força: ${forca}`);
            console.log(`O fim da sua jornada como Herói...
Morreu fiel ao que supostamente acreditava e será lembrado por sua bravura.`);
            break;
          }
        } else if (resposta14 === 2) {
          console.log(
            "------------------------------------------------------------------------------------------------------------------------------"
          );
          telecineseModificada = poderTelecinese.aumentarTelecinese(10);
          forca = poderTelecinese.aumentarForca(10);
          console.log(
            `Seu comandante não está acostumado a receber negativas e você voltará para a vanguarda, longe da ação novamente...`
          );
          diaAtual = passagemDia.passarDia(1);
          console.log(`Os Apostates avançam cada vez mais e alcançam a posição da sua vanguarda.
Você tem a opção de atacar ou bater em retirada.
    Qual opção você escolhe?
        1- Atacar
        2- Retirada`);
          let resposta18 = +prompt();
          console.clear();
          if (resposta18 === 1) {
            console.log(
              "------------------------------------------------------------------------------------------------------------------------------"
            );
            telecineseModificada = poderTelecinese.diminuirTelecinese(15);
            forca = poderTelecinese.diminuirForca(20);
            console.log(`Sua decisão parece arriscada...
Você leva muitos Apostates com você,
    mas guerras não se vencem sozinho...`);
            morteHeroi();
            telecineseModificada = 0;
            console.log(
              `Esse é seu nível final de poder: ${telecineseModificada}`
            );
            forca = 0;
            console.log(`Esse é seu nível final de força: ${forca}`);
            break;
          } else if (resposta18 === 2) {
            console.log(
              "------------------------------------------------------------------------------------------------------------------------------"
            );
            telecineseModificada = poderTelecinese.diminuirTelecinese(10);
            forca = poderTelecinese.diminuirForca(10);
            console.log(`Sua vida vale mais que sua honra?
    Não chegaremos a saber.
    Os Apostates conseguem te pegar durante a retirada e você morre...
            Sem heroismo, sem glória...`);
            telecineseModificada = 0;
            console.log(
              `Esse é seu nível final de poder: ${telecineseModificada}`
            );
            forca = 0;
            console.log(`Esse é seu nível final de força: ${forca}`);
            break;
          }
        }
      } else if (resposta13 === 2) {
        console.log(
          "------------------------------------------------------------------------------------------------------------------------------"
        );
        telecineseModificada = poderTelecinese.diminuirTelecinese(5);
        forca = poderTelecinese.diminuirForca(5);
        console.log(`Obedecer em certos momentos pode ser uma virtude, só que nesse foi a sua sentença de morte.
Os Apostates já haviam planejado uma emboscada e vocês foram mortos.
    Nem todos os Heróis vivem o suficiente para fazer historia...`);
        telecineseModificada = 0;
        console.log(`Esse é seu nível final de poder: ${telecineseModificada}`);
        forca = 0;
        console.log(`Esse é seu nível final de força: ${forca}`);
        break;
      }
    } else if (resposta12 === 2) {
      //VIA 2 PODER 2
      telecineseModificada = poderTelecinese.aumentarTelecinese(45);
      console.log(`Você se tornou o mais forte entre os "Sotíras de vento".
        Conhecido como Éolo`);
      console.log(
        "------------------------------------------------------------------------------------------------------------------------------"
      );
      tempoPassado();
      diaAtual = passagemDia.passarDia(1);
      console.log(`Você, jovem guerreiro, a esperança entre os "Sotíras de vento", chega para sua primeira batalha.
Seu primeiro combate será no centro da guerra, o comandante acredita que tanto poder é o contrapeso necessário
para a vitória (mas lembre-se, fisicamente você é um alvo fácil).
Ao desembarcar no campo de batalha a cena é aterrorizante, centenas de corpos empilhados, incontáveis mortes de ambos os lados,
e você pode fazer a diferença, mas também pode morrer facilmente...
    Você escolhe avançar pelo caos e atacar ou recuar e se esconder até amenizar a situação
        1- Atacar
        2- Recuar`);
      let resposta19 = +prompt();
      console.clear();
      if (resposta19 === 1) {
        console.log(
          "------------------------------------------------------------------------------------------------------------------------------"
        );
        telecineseModificada = poderTelecinese.aumentarTelecinese(10);
        console.log(`Não se espera menos do Éolo.
            Você foi treinado para esse tipo de situação e seu poder fez a diferença,
            trazendo vitória para os Sotíras`);
        console.log(
          "------------------------------------------------------------------------------------------------------------------------------"
        );
        console.log(`Entretanto, você foi atingido em combate, e sua fraqueza física aumenta o dano.
Você precisa ir para a ala médica se recuperar.
Enquanto você se recupera os Apostates avançam em grande força, o perigo se aproxima e só seu poder pode ajudar...`);
        diaAtual = passagemDia.passarDia();
        console.log(`Você irá esperar a recuperação total ou ataca do jeito que está?
        1- Esperar
        2- Atacar`);
        let resposta20 = +prompt();
        console.clear();
        if (resposta20 === 1) {
          console.log(
            "------------------------------------------------------------------------------------------------------------------------------"
          );
          telecineseModificada = poderTelecinese.aumentarTelecinese(5);
          console.log(`Paciência é uma virtude, mas a que custo?
O avanço dos Apostates se estende, dizimando forças Sotíras pelo caminho.
Mas você se recuperou e está pronto para ativa.`);
          diaAtual = passagemDia.passarDia(3);
          console.log(`A guerra está em um momento crítico, os Apostates estão cada vez mais proxímos,
toda sua força será necessária, mas ela te cobra um preço, mesmo com seu corpo recuperado, não irá suportar tal uso de poder, 
a vitória está em suas mãos. Você irá se sacrificar ou não usará todo seu poder?
        1- Sacrifício
        2- Não usar todo poder`);
          let resposta21 = +prompt();
          console.clear();
          if (resposta21 === 1) {
            console.log(
              "------------------------------------------------------------------------------------------------------------------------------"
            );
            console.log(`Um Herói é aquele que compreende a magnitude de seu poder e a responsabiidade que o acompanha.
Seu esforço final foi álem do imaginável e concebeu a vitória aos Sotíras.
Sua jornada chegou ao fim Herói...
        Será para sempre lembrado, Éolo.`);
            telecineseModificada = 0;
            console.log(
              `Esse é seu nível final de poder: ${telecineseModificada}`
            );
            break;
          } else if (resposta21 === 2) {
            console.log(
              "------------------------------------------------------------------------------------------------------------------------------"
            );
            console.log(`Um Herói deve estar apto a fazer o que for preciso, não foi o seu caso, e as consequências foram a derrota e 
                    a morte dos Sotíras, inclusive a sua.
                    Nem todos são capazes de serem Heróis...`);
            telecineseModificada = 0;
            console.log(
              `Esse é seu nível final de poder: ${telecineseModificada}`
            );
            break;
          }
        } else if (resposta20 === 2) {
          console.log(
            "------------------------------------------------------------------------------------------------------------------------------"
          );
          console.log(`Por mais que seu poder seja forte, você escolheu ser fraco de corpo, seu ímpeto de Herói é compreensível,
                porém mortal.
                Esse é o fim do Éolo, nem todos os Heróis reconhecem suas fraquezas...`);
          telecineseModificada = 0;
          console.log(
            `Esse é seu nível final de poder: ${telecineseModificada}`
          );
          break;
        }
      } else if (resposta19 === 2) {
        console.log(
          "------------------------------------------------------------------------------------------------------------------------------"
        );
        console.log(`Você foi treinado para enfrentar as adversidades das batalhas, mas a realidade é diferente do treinamento.
Toda esperança e pressão que existia no Éolo lhe afetaram, e voltar seria a máxima de desonra.
Então você foge e nunca mais retorna.
Afinal, você não era um Herói`);
        console.log(`Esse é seu nível final de poder: ${telecineseModificada}`);
        break;
      }
    }
  } else if (escolha === "Umbracinese") {
    console.log(`Você aprimora seu poder enquanto os anos se passam.
Existem poucos com esse poder, por ser o mais forte e o mais difícil de controlar dentre três,
assumir a Umbracinese é um risco, e você começou a notar isso durante o treinamento,
seus pensamentos estão tomando direções incomuns quanto mais forte você fica.
    Isso te assusta?
    1- Sim
    2- Não`);
    let resposta22 = +prompt();
    console.clear();
    if (resposta22 === 1) {
      //VIA 1 PODER 3
      console.log(
        "------------------------------------------------------------------------------------------------------------------------------"
      );
      umbracineseModificada = poderUmbracinese.diminuirUmbracinese(5);
      console.log(`Isso assusta qualquer um na verdade, mas o medo será a âncora que manterá seu poder sob controle.
        
        Seu treinamento está chegando ao fim, seu medo tem sido essencial para controlar as sombras,
        mas é claro que isso te deixa menos poderoso.
        Porém, lúcido e líder dos "Sotíras do vácuo".`);

      console.log(
        "------------------------------------------------------------------------------------------------------------------------------"
      );
      tempoPassado();
      diaAtual = passagemDia.passarDia(1);
      umbracineseModificada = poderUmbracinese.aumentarUmbracinese(40);
      console.log(`Você, jovem comandante dos "Sotíras do vácuo", é enviado ao quartel general para liderar sua primeira missão.
Os Umbracineticos são poucos e instáveis, você precisará de pulso firme para comanda-los.
Sua primeira missão é destruir uma base dos Apostates, você e mais cinco "Sotíras do vácuo" vão até essa base e ela parece estar abandonada,
sua ordem foi destruir o lugar e vocês assim o fazem,
mas você nota que ali na realidade é um abrigo e várias famílias surgem dos esconderijos.
Eles são Apostates, mas não são combatentes. Você como comandante permite que eles fujam ou os mata?
    1- Deixa que fujam
    2- Os mata`);
      let resposta23 = +prompt();
      console.clear();
      if (resposta23 === 1) {
        console.log(
          "------------------------------------------------------------------------------------------------------------------------------"
        );
        umbracineseModificada = poderUmbracinese.diminuirUmbracinese(10);
        decisaoGuerra();
        console.log(`Já seu guerreiro mais forte e instável não está contente com essa decisão, chamado de Hades, deixou parte de sua humanidade
        no treinamento...`);
        console.log(
          "------------------------------------------------------------------------------------------------------------------------------"
        );
        diaAtual = passagemDia.passarDia(1);
        console.log(`Uma nova missão já lhe aguarda, invadir o quartel general dos Apostates.
Uma missão bastante arriscada, você forma sua equipe
    Vai levar o guerreiro Hades?
        1- Sim
        2- Não`);
        let resposta24 = +prompt();
        console.clear();
        if (resposta24 === 1) {
          console.log(
            "------------------------------------------------------------------------------------------------------------------------------"
          );
          console.log("Essa decisão não altera seu nível de poder ");
          console.log(`Nível de poder atual: ${umbracineseModificada} `);
          console.log(`Seu guerreiro mais forte fora de combate, seria de fato estranho...
Vocês entram no QG dos Apostates, mas o avanço se mostra difícil, combates ocorrem e parte da sua pequena equipe padece pelo caminho.
Você encara essa situação e deve tomar uma decisão, bater em retirada ou avançar?
        1- Bater em retirada
        2- Avançar`);
          let resposta25 = +prompt();
          console.clear();
          if (resposta25 === 1) {
            console.log(
              "------------------------------------------------------------------------------------------------------------------------------"
            );
            umbracineseModificada = poderUmbracinese.diminuirUmbracinese(5);
            console.log(`Seria essa a decisão mais inteligente?
Para você, talvez, mas não para o Hades, que se revolta e lhe mata...
Como foi dito antes:
        "A guerra é um campo de decisões difíceis..."
        Sua jornada acabou, Herói.`);
            umbracineseModificada = 0;
            console.log(`Seu nível de poder final é: ${umbracineseModificada}`);
            break;
          } else if (resposta25 === 2) {
            console.log(
              "------------------------------------------------------------------------------------------------------------------------------"
            );
            umbracineseModificada = poderUmbracinese.aumentarUmbracinese(5);
            console.log(`Coragem você tem, e inteligencia?
                Os próximos passos dirão...
                
                Vocês chegam ao centro de comando e encontram o líder dos Apostates, Sísifo.
                Sua equipe está em menor número por muito, mas a opção de não atacar já não existe, pois o instável Hades iniciou o combate.
                Uma luta intensa se desencadea, muitos padecem de ambos os lados, restam você e o Hades na sua equipe, Sísifo está sem gurada,
                um alvo fácil, porém Hades está cercado e perdendo a luta. Você deve decidir entre ajudar Hades ou atacar Sísifo.
                1- Ajuda Hades
                2- Ataca Sísifo`);
            let resposta26 = +prompt();
            console.clear();
            if (resposta26 === 1) {
              console.log(
                "------------------------------------------------------------------------------------------------------------------------------"
              );
              umbracineseModificada = poderUmbracinese.diminuirUmbracinese(10);
              console.log(`Você foi em auxílio de Hades e conseguiu ajuda-lo a vencer a luta,
                    mas foi atingido pelas costas e foi morto.
                    Ao menos você foi um Herói...`);
              umbracineseModificada = 0;
              console.log(
                `Seu nível de poder final é: ${umbracineseModificada}`
              );
              break;
            } else if (resposta26 === 2) {
              console.log(
                "------------------------------------------------------------------------------------------------------------------------------"
              );
              umbracineseModificada = poderUmbracinese.aumentarUmbracinese(10);
              console.log(`Enquanto você vai para atacar Sísifo, Hades está sendo morto.
                    Você alcança Sísifo, e o mata com apenas um golpe.
                    Esse é o fim da guerra e você é o grande Herói, e Heróis tomam decisões difíceis...`);
              console.log(
                `Esse é seu nível de poder final: ${umbracineseModificada}`
              );
              break;
            }
          }
        } else if (resposta24 === 2) {
          console.log(
            "------------------------------------------------------------------------------------------------------------------------------"
          );
          console.log("Essa decisão não altera seu nível de poder ");
          console.log(`Nível de poder atual:${umbracineseModificada} `);
          console.log(`Não levar o mais forte dentre os seus, ainda tendo poucos, decisão arriscada...
            E decisões trazem consequências, sua invasão foi um fracasso e todos vocês morrem.
            Tempos difíceis exigem Heróis, não era o seu caso...`);
          umbracineseModificada = 0;
          console.log(`Seu nível de poder final é: ${umbracineseModificada}`);
          break;
        }
      } else if (resposta23 === 2) {
        console.log(
          "------------------------------------------------------------------------------------------------------------------------------"
        );
        console.log(
          `A guerra é um campo de decisões difíceis, e você tomou uma, espero que esteja bem consigo mesmo...`
        );
        diaAtual = passagemDia.passarDia(1);
        console.log(`Afinal, você foi treinado para isso e teve suas razões.
        
A guerra continua. E, uma nova missão lhe aguarda.
Atacar o QG dos Apostates. O mesmo time segue para a missão, e entra com facilidade no QG inimigo, mas o avanço se torna difícil
e parte da sua equipe padece pelo caminho.
Você encara essa situação e deve tomar uma decisão, bater em retirada ou avançar?
        1- Bater em retirada
        2- Avançar`);
        let resposta27 = +prompt();
        console.clear();
        if (resposta27 === 1) {
          console.log(
            "------------------------------------------------------------------------------------------------------------------------------"
          );
          umbracineseModificada = poderUmbracinese.diminuirUmbracinese(5);
          console.log(`Seria essa a decisão mais inteligente?
Para você, talvez, mas não para o Hades, que se revolta e lhe mata...
Como foi dito antes:
    "A guerra é um campo de decisões difíceis..."
    Sua jornada acabou, Herói.`);
          umbracineseModificada = 0;
          console.log(`Seu nível de poder final é: ${umbracineseModificada}`);
          break;
        } else if (resposta27 === 2) {
          console.log(
            "------------------------------------------------------------------------------------------------------------------------------"
          );
          umbracineseModificada = poderUmbracinese.aumentarUmbracinese(5);
          console.log(`Coragem você tem, e inteligencia?
    Os próximos passos dirão...
                
Vocês chegam ao centro de comando e encontram o líder dos Apostates, Sísifo.
Sua equipe está em menor número por muito, mas a opção de não atacar já não existe, pois o instável Hades iniciou o combate.
Uma luta intensa se desencadea, muitos padecem de ambos os lados, restam você e o Hades na sua equipe, Sísifo está sem gurada,
um alvo fácil, porém Hades está cercado e perdendo a luta. Você deve decidir entre ajudar Hades ou atacar Sísifo.
        1- Ajuda Hades
        2- Ataca Sísifo`);
          let resposta28 = +prompt();
          console.clear();
          if (resposta28 === 1) {
            console.log(
              "------------------------------------------------------------------------------------------------------------------------------"
            );
            umbracineseModificada = poderUmbracinese.diminuirUmbracinese(10);
            console.log(`Você foi em auxílio de Hades e conseguiu ajudá-lo a vencer a luta,
mas foi atingido pelas costas e foi morto.
Ao menos você foi um Herói...`);
            umbracineseModificada = 0;
            console.log(`Seu nível de poder final é: ${umbracineseModificada}`);
            break;
          } else if (resposta28 === 2) {
            console.log(
              "------------------------------------------------------------------------------------------------------------------------------"
            );
            umbracineseModificada = poderUmbracinese.aumentarUmbracinese(10);
            console.log(`Enquanto você vai para atacar Sísifo, Hades está sendo morto.
Você alcança Sísifo, e o mata com apenas um golpe.
Esse é o fim da guerra e você é o grande Herói, e Heróis tomam decisões difíceis...`);
            console.log(
              `Esse é seu nível de poder final: ${umbracineseModificada}`
            );
            break;
          }
        }
      }
    } else if (resposta22 === 2) {//VIA 2 PODER 3
      umbracineseModificada = poderUmbracinese.aumentarUmbracinese(20);
      console.log(`Seu treinamento está chegando ao fim, você abraçou as sombras como uma velha amiga, mas isso te modificou completamente.
Será que ainda existe um resto de humanidade aí dentro?
Veremos...
Sua entrega lhe transformou no mais forte entre os "Sotíras do vácuo", conhecido como Hades. `);
      console.log(
        "------------------------------------------------------------------------------------------------------------------------------"
      );
      tempoPassado();
      diaAtual = passagemDia.passarDia(1);
      console.log(`Você, o guerreiro mais forte dos "Sotíras do vácuo", foi enviado para sua primeira batalha, seu poder é a esperança de vitória, mas ao mesmo tempo,
        todos temem que você se perca nas sombras.
         
A batalha se desenrola, e você facilmente derrota quem se opõe a você, e cada vez que usa seu poder, maais forte ele fica...
Um enorme pelotão inimigo se aproxima. Cabe a você decidir entre derrotá-los com facilidade e ser mais consumido pelas sombras ou deixar
a luta para seus companheiros, que podem ou não vencer?
    1- Derrotar facilmente
    2- Deixar a luta para os companheiros`);
      let resposta29 = +prompt();
      console.clear();
      if (resposta29 === 1) {
        console.log(
          "------------------------------------------------------------------------------------------------------------------------------"
        );
        umbracineseModificada = poderUmbracinese.aumentarUmbracinese(30);
        console.log(
          `Seu nível de escuridão está elevado, já não existe muito de humanidade em você, mas a batalha foi vencida.`
        );
        diaAtual = passagemDia.passarDia(1);
        console.log(`A guerra continua, e sua nova missão é invadir o QG dos Apostates, você, seu comandante e um pequeno grupo que resta dos seus 
companheiros de poder.
Vocês conseguem invadir e avançar pelo QG até a sala de comando e encontram o líder dos Apostates, Sísifo,
e um grande número de soldados, as sombras dentro de você clamam pelo caos e você inicia o combate.
Uma batalha intensa com muitas baixas de ambos os lados, restam poucos de vocês e a derrota parece certa.
Você deve decidir entre usar todo seu poder, derrotar os inimigos e padecer para as sombras por completo ou
lutar até o último esforço.
    1- Usar o poder e ser consumido
    2- Lutar`);
        let resposta30 = +prompt();
        console.clear();
        if (resposta30 === 1) {
          console.log(
            "------------------------------------------------------------------------------------------------------------------------------"
          );
          umbracineseModificada = poderUmbracinese.aumentarUmbracinese(10);
          console.log(`Mais uma decisão difícil, mais uma vitória conquistada, mas a que preço?
Não existe mais você, apenas as sombras que tomaram posse de seu corpo, seus companheiros foram obrigados a te matar 
pela ameaça que você se tornou.
Mas você será para sempre lembrado como o Herói que acabou com a guerra, O Hades.`);
          umbracineseModificada = 0;
          console.log(`Seu nível de poder final: ${umbracineseModificada}`);
          break;
        } else if (resposta30 === 2) {
          console.log(
            "------------------------------------------------------------------------------------------------------------------------------"
          );
          umbracineseModificada = poderUmbracinese.diminuirUmbracinese(10);
          console.log(`Seu contentamento é compreensível, mas não útil.
Seu companheiros padeceram e você foi capturado e levado para a prisão por uma noite para ser contido.`);
          diaAtual = passagemDia.passarDia();
          console.log(`Sísifo lhe chama para conversar:
    "Olá, Hades!
    Seu poder é de fato é inegualável, mas você sabe o real motivo da sua luta?"`);
          respostaSisifo();
          console.log(`As palavras de Sísifo ecoam na sua mente...
Chegou o momento da sua grande decisão, usar pela última vez seu poder e ser consumido pelas sombras, ou, caso Sísifo tenha razão
, se juntar a ele.
    1- Atacar uma última vez
    2- Juntar-se a Sísifo`);
          let resposta31 = +prompt();
          console.clear();
          if (resposta31 === 1) {
            console.log(
              "------------------------------------------------------------------------------------------------------------------------------"
            );
            umbracineseModificada = poderUmbracinese.aumentarUmbracinese(30);
            console.log(`Você acabou com a guerra, mas isso te custou sua essência, e você se tornou escuridão.
Os Sotíras não conseguiram te controlar, então te mataram...
    Mas você se tornou O grande Herói de 14 herculis b, para sempre lembrado, Hades`);
            umbracineseModificada = 0;
            console.log(`Seu nível de poder final: ${umbracineseModificada}`);
            break;
          } else if (resposta31) {
            console.log(
              "------------------------------------------------------------------------------------------------------------------------------"
            );
            mudardeLado();
            console.log(`Seu nível de poder final: ${umbracineseModificada}`);
            break;
          }
        }
      } else if (resposta29 === 2) {
        console.log(
          "------------------------------------------------------------------------------------------------------------------------------"
        );
        umbracineseModificada = poderUmbracinese.diminuirUmbracinese(15);
        console.log(`Você disse que a escuridão não te assusta. Será que você disse a verdade?
Guerras são campos de decisões difíceis, você tomou a sua e, você e seus companheiros foram mortos.
    Parece que no fim, você não estava preparado para ser um Herói...`);
        umbracineseModificada = 0;
        console.log(`Seu nível final de poder: ${umbracineseModificada}`);
        break;
      }
    }
  }
}
