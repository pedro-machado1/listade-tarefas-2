const prompt = require('prompt-sync')();
let b=[],g=[], a=[], c= 0
for(let f = 0;f<5;f++){
g.push(prompt(" Escreva a resposta correta para o "+ (f+1)+ " número da loteria "))
    }
for(let i = 0;i<3;i++){
    for(let f = 0;f<5;f++){
        a.push(String(prompt(" Escreva a sua resposta para a questão " + (f+1) + " " , " " )))
    }
    b.push(a)
    a=[]
}
for( let i = 0;i<3;i++){
    for(let f = 0;f<5;f++){
        if (b[i][f]== g[f]){
            a +=1
        }
    }
    if (a == 5){
        console.log(" O apostador número "+ (i+1)+ " é um GANHADOR  ")
    }
    a=0
}

