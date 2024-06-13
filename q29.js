const prompt = require('prompt-sync')();
let matriz = [],a=[],n, somat=0, somad=0, soma2c=0, soma4l=0
for(let i = 0;i<5;i++){
    for(let f=0;f<5;f++){
        n=parseFloat(prompt(" Escreva o elemento da matriz na linha "+ (i+1)+ " e na coluna "+ (f+1)+ " ", "0"))
        a.push(n)
        somat+=n
        if (f==i){
            somad+= n
        }
        if (i==4){
            soma4l+= n 
        }
        if(f==2){
            soma2c +=n
        }
    }
    matriz.push(a)
    a= []
}
console.log("A soma de todos elementos da 4 linha da matriz é  "+ soma4l)
console.log("A soma de todos elementos da 2 coluna da matriz é "+ soma2c)
console.log("A soma dos elementos da diagonal principal dessa matriz é "+ somad)
console.log("A soma de todos elementos dessa matriz é "+ somat)
console.log("A matriz é ", matriz)

