const prompt = require('prompt-sync')();
let matriz = [],b=[],n, soma = 0, soma2 =0   

//let a= `[[1,2,3,4,5,6,7,8,9,0],[1,2,3,4,5,6,7,8,9,0],[1,2,3,4,5,6,7,8,9,0],[1,2,3,4,5,6,7,8,9,0],[1,2,3,4,5,6,7,8,9,0],[1,2,3,4,5,6,7,8,9,0],[1,2,3,4,5,6,7,8,9,0],[1,2,3,4,5,6,7,8,9,0],[1,2,3,4,5,6,7,8,9,0],[1,2,3,4,5,6,7,8,9,0]]`
a=prompt(" Insira a matriz em array 10X10 ")

matriz = a.split("],")
for(let i = 0;i<matriz.length;i++){
    n = matriz[i]
    n=n.replaceAll("]", "")
    n= n.replaceAll("[", "")
    n = n.split(",")
    b.push(n)
}
for(let i = 0;i<10;i++){
    for(let f=0;f<10;f++){
        if (f==i){
            soma += parseInt(b[i][f])
        }
        if (f == i-1){ 
            soma2 += parseInt(b[i][f])
        }
    }
}
console.log("A soma dos números da diagonal é "+ soma)
console.log("A soma dos números abaixo da diagonal são " + soma2)