const prompt = require('prompt-sync')();
let nome , lista= [], inverso=[]
for (let i=0 ; i < 7 ; i++){
    nome= prompt("Escreva um dos sete nomes ")
    lista.push(nome)
}
for (let i = 7 ; i >= 0 ; i--){
    inverso.push(lista[i])
}
console.log(inverso)