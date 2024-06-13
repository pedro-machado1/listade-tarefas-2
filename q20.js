const prompt = require('prompt-sync')();
var tabela= []
 
for (let i=0 ; i < 80; i++){
    obj = {}
    obj.matricula = prompt(" Matrícula: ")
    obj.nome = prompt(" Nome: ")
    obj.sb = parseFloat(prompt(" Salário bruto: "))
    tabela.push(obj)
}
console.log("---------------------------")
for (let i=0 ; i < 80 ; i++){
    console.log("Matrícula: "+tabela[i].matricula)
    console.log("Nome: "+tabela[i].nome)
    console.log("Salário bruto:"+tabela[i].sb)
    console.log("Dedução do INSS: "+tabela[i].sb * 0.12)
    console.log("Salário líquido: "+tabela[i].sb * 0.78)
}




































