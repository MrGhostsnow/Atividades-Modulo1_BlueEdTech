//Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array.
 //Depois, mostre quantas vezes cada valor foi conseguido.
 let valor = Math.floor( 1 + 6*Math.random() );
 let resp = [];
 let todosnumeros = 0
 while(resp.length < 100){
     valor = Math.floor( 1 + 6*Math.random() );
     resp.push(valor)
 }
 console.log(resp)
