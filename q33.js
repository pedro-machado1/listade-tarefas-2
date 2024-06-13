const prompt = require('prompt-sync')();
let matriz = [],a=[],n, mediasec, multiplicar
for(let i = 0;i<3;i++){
    for(let f=0;f<3;f++){
        n=parseFloat(prompt(" Escreva o elemento da matriz na linha "+ (i+1)+ " e na coluna "+ (f+1)+ " ", "0"))
        a.push(n)
    }
        matriz.push(a)
        a= []
}
mediasec= (matriz[0][2] +matriz[1][1]+matriz[2][0])/ 9
// ver se tem método melhor
for(let i = 0;i<3;i++){
    for(let f=0;f<3;f++){
        if(i==f){
            matriz[i][f]= mediasec*matriz[i][f]
            matriz[i][f]=parseFloat(matriz[i][f].toFixed(2))
        }
    }
}
console.log(matriz)