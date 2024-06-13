const prompt = require('prompt-sync')(); 
let horas = parseInt(prompt("Quantas horas de atividade física foram realizadas no mês "))
let pontos, valor;
if (horas<= 10){
    pontos= horas * 2
    valor = pontos * 0.05
}
if (horas<= 20){
    pontos= (10 * 2) + ((horas- 10) * 5)
    valor = pontos * 0.05
}
if (horas> 20){
    pontos= (10 * 2) + (10 * 5) + ((horas- 20)* 10)
    valor = pontos * 0.05
}
console.log("O total de pontos ganhos foi " + pontos )
console.log("O total de dinheiro ganhos foi " + valor )

