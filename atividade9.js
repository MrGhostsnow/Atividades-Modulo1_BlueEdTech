const prompt = require('prompt-sync') ( );
let nome = ''
let senha = ''  
while(true){
    nome = prompt("Digite o nome de usuário: ");
    senha = prompt("Digite a senha: ");
    if (senha === nome){
        console.log("A senha deve ser diferente do nome de usuário...Tente novamente");
    }  else{
            console.log("CONECTADO!");
            break;
    }
}

