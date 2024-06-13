const prompt = require('prompt-sync')();
let matriz = [],a=[],n, n1, V= []    

for(let i = 0;i<6;i++){
    for(let f=0;f<6;f++){
        n=parseFloat(prompt(" Escreva o elemento da matriz na linha "+ (i+1)+ " e na coluna "+ (f+1)+ " ", "0"))
        a.push(n)
    }
    matriz.push(a)
    a= []
}
n1 = parseFloat(prompt(" Escolha um número para multiplicar a matriz "))
for(let i = 0;i<6;i++){
    for(let f=0;f<6;f++){
        V.push(matriz[i][f]*n1)
    }
}
for (let cont= 0;cont<36;cont++ ){
    console.log(V[cont])
}