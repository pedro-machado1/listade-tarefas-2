const prompt = require('prompt-sync')();
let vm = 0, vf = 0
let valor 
do {
    let salario = parseInt(prompt("Qual é o salário do funcionário ?"))
    let sexo = prompt("Qual é o sexo do funcionário ? M-MASCULINO F-FEMININO ")
    if (sexo.charAt(0) == 'F' ){
        vf = vf + salario 
    }
    else if (sexo.charAt(0) == 'M'){
        vm = vm + salario
    }
    else{
        console.log(" digite uma letra correta para o sexo")
    }
    valor= parseInt(prompt("Digite 1 se deseja parar ou digite qualquer outro número para continuar "))
} while (valor != 1)
console.log(" o total de salários recebidos pelas mulheres foi: " + vf + " reais ")
console.log(" o total de salários recebidos pelos homens foi: " + vm + " reais ")

