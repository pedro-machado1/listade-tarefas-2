const prompt = require('prompt-sync')();
let b,g=[]  , e=[], a=[]
for(let f = 0;f<13;f++){
g.push(prompt(" Escreva a resposta para a questão "+ (f+1)+ " "))
    }
for(let i = 0;i<100;i++){
    a.push(0)
    e.push(0)
    for(let f = 0;f<13;f++){
        b=String(prompt(" Escreva a sua resposta para a questão " + (f+1) + " " , " " ))
        if (b===g[f])
        {
            a[i]+=1 
        }
        else{
            e[i]+=1

        }
    }
}
for(let i = 0;i<100;i++){
    if (a[i]== 13){
        console.log("Parabéns, tu foi o GANHADOR.")
    }
    else{
        console.log("O usuário " + i +" teve "+a[i]+ " acertos e "+ e[i]+ " erros")
    }
}
