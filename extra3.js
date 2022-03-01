const prompt = require('prompt-sync') ( );
var salario = +prompt("Informe o salário atual: ");
var salariore = 0
if (salario <= 280){
    salariore = salario + (salario * (20/100));
    const diferença = salariore - salario;
    console.log(`Com o reajuste de 20% o salário de R$${salario} fica R$${salariore} com um aumento de R$${diferença} `);
}
    else if(salario < 700){
        salariore = salario + (salario * (15/100));
        const diferença = salariore - salario;
        console.log(`Com o reajuste de 15% o salário de R$${salario} fica R$${salariore} com um aumento de R$${diferença} `);
}
    else if (salario < 1500){
        salariore = salario + (salario * (10/100));
        const diferença = salariore - salario;
        console.log(`Com o reajuste de 10% o salário de R$${salario} fica R$${salariore} com um aumento de R$${diferença} `);
}
    else{
        salariore = salario + (salario * (5/100));
        const diferença = salariore - salario;
        console.log(`Com o reajuste de 5% o salário de R$${salario} fica R$${salariore} com um aumento de R$${diferença} `);
    }