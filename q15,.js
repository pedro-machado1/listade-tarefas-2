const prompt = require('prompt-sync')();
let n , lista= [], inverso=[]
for (let i=0 ; i < 10 ; i++){
    n= prompt("Escreva um dos 10 números ")
    lista.push(n)
}
for (let i=0 ; i < 10 ; i++){
console.log(lista[i])
console.log("a posição em que rste número está localizado é ", i)
}