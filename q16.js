const prompt = require('prompt-sync')();
let n , lista= [], inverso=[]
function ordem(a,b) {
    return a-b
}
for (let i=0 ; i < 20 ; i++){
    n= Math.floor(Math.random()*99)+1
    lista.push(n)
    console.log(n)
}
console.log(lista.sort(ordem))
