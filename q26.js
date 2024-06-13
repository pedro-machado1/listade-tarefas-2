const prompt = require('prompt-sync')();
let m1 = [],list=[],n, multiplicar=[], a=[],m2= []     
for(let i = 0;i<3;i++){
    for(let f=0;f<5;f++){
        n=parseFloat(prompt(" Escreva o elemento da m1 na linha "+ (i+1)+ " e na coluna "+ (f+1)+ " "))
        list.push(n)
    }
    m1.push(list)
    list= []
}
for(let i = 0;i<3;i++){
    for(let f=0;f<5;f++){
        n=parseFloat(prompt(" Escreva o elemento da m1 na linha "+ (i+1)+ " e na coluna "+ (f+1)+ " "))
        list.push(n)
    }
    m2.push(list)
    list= []
} 
for(let i = 0;i<3;i++){
    for(let f=0;f<5;f++){
        list.push(m1[i][f] *m2[i][f])
    }
    multiplicar.push(list)
    list=[]
}
console.log(m1)
console.log(m2)
console.log(multiplicar)

