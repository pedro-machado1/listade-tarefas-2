const prompt = require('prompt-sync')();
let matriz = [],a=[],n, SC=[], SL= [], soma=0    
for(let f=0;f<5;f++){
    SC.push(0)
}
for(let i = 0;i<5;i++){
    for(let f=0;f<5;f++){
        n=parseFloat(prompt(" Escreva o elemento da matriz na linha "+ (i+1)+ " e na coluna "+ (f+1)+ " ", "0"))
        a.push(n)
        soma +=n
        SC[f] = SC[f] +n
    }
    matriz.push(a)
    SL.push(soma)
    a= []
    soma=0
}
console.log(matriz)
console.log("Soma das linhas "+SL)
console.log("Soma das colunas "+SC)

