const prompt = require('prompt-sync')();
let n1, soma= 10, razao
n1 = parseFloat(prompt("Escreva o primeiro termo da PA "))
razao= parseFloat(prompt("Escreva a razão da PA "))
console.log(n1)
for ( let i = 1 ; i <10; i++){
    n1= n1 + razao
    console.log(n1)
    soma+= n1
}
console.log( " a soma de todos os elementos dessa sequência é ", soma )