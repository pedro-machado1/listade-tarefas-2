const prompt = require('prompt-sync')();
let matriz = [],list=[],n, soma=0, a=[]     
for(let i = 0;i<15;i++){
    soma = 0
    for(let f=0;f<20;f++){
        n=parseFloat(prompt(" Escreva o elemento da matriz na linha "+ (i+1)+ " e na coluna "+ (f+1)+ " "))
        list.push(n)
        soma+=n
    }
    matriz.push(list)
    list= []
    a.push(soma)
}
console.log(matriz)
console.log(a)