const prompt = require('prompt-sync')();
let matriz = [],a=[],n, modi= [], m=[]
for(let i = 0;i<12;i++){
    m.push(Number.MIN_VALUE)
    for(let f=0;f<13;f++){
        n=parseFloat(prompt(" Escreva o elemento da matriz na linha "+ (i+1)+ " e na coluna "+ (f+1)+ " ", "0"))
        a.push(n)
        if (n>[i]){
            m[i]=n
        }
    }
    matriz.push(a)
    a= []
}
for(let i = 0;i<12;i++){
    for(let f=0;f<13;f++){
        a.push(matriz[i][f]/m[i])
        a[f]=parseFloat(a[f].toFixed(2))
    }
    modi.push(a)
    a=[]
}
console.log("A matriz lida é ")
console.log(matriz)

console.log("A matriz modificada é ")
console.log(modi)

