const prompt = require('prompt-sync')();
let matriz = [],a=[],n, diagonal=[]  
for(let i = 0;i<50;i++){
    for(let f=0;f<50;f++){
        n=parseFloat(prompt(" Escreva o elemento da matriz na linha "+ (i+1)+ " e na coluna "+ (f+1)+ " ", "0"))
        a.push(n)
        if (f==i){
            diagonal.push(n)
        }
    }
    matriz.push(a)
    a= []
}
for(let i = 0;i<50;i++){
    for(let f=0;f<50;f++){
        matriz[i][f]*= diagonal[i] 
    }
}
console.log(matriz)
