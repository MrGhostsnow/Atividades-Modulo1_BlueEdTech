/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Estado Civil: 's', 'c', 'v', 'd';*/

const prompt = require('prompt-sync')( );
let nome = ''
let idade = ''
let salario = ''
let estcivil = ''
while(true){
    nome = prompt("Digite um nome: ");
    if (nome.length < 3){
        console.log("Nome Inválido...Tente novamente");
        break;
    }else{
        console.log("Nome registrado");
    }
    idade = +prompt("Digite uma idade:");
    if (idade < 0 && idade > 150){
        console.log("Idade Inválida...Tente novamente");
    }else{
        console.log("Idade registrada ");
    }
    salario = +prompt("Digite um salário:");
    if(salario < 0 ){
        console.log("Salário Inválido...Tente novamente");
    }else{
        console.log("Salário registrado");
    }
    estcivil = prompt("Estado civil: [s/c/v/d]");
    if (estcivil ==! "s" && estcivil==! "c" && estcivil ==! "v" && estcivil==! "d"){
        console.log("Estado Civil Inválido...Tente novamente");
    }else{
        console.log("Estado Civil resgistrado");
    }
    break
}