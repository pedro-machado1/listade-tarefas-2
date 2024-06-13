const prompt = require('prompt-sync')();
let habitantes, salario, filhos, ms, mf,maior=0,percentuals=0, somasalario=0, somafilho=0
habitantes= parseInt(prompt(" Quantos habitantes serão analizados? "))
for (let i=0 ; i < habitantes; i++){
salario = parseFloat(prompt("Qual é o salário do habitante? "))
somasalario+= salario
if (salario>maior){
    maior=salario
}
if(salario<350){
    percentuals++
}
filhos = parseInt(prompt("Quantos filhos tem esse habitante? "))
somafilho += filhos
}
ms= somasalario/habitantes
console.log("A média de salário dos habitantes é", ms)
console.log("O maior salário entre esses habitantes é", maior)
percentuals= 100*(percentuals/habitantes)
console.log("O percentual de habitantes que recebem até 350,00 é", percentuals+ "%")
mf= somafilho/habitantes
console.log("A média de filhos dos habitantes é", mf)


