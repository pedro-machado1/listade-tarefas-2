const prompt = require('prompt-sync')();
let b,g=[]  , e=[], a=[]
for(let f = 0;f<20;f++){
g.push(prompt(" Escreva a resposta para a questão "+ (f+1)+ " "))
    }
for(let i = 0;i<2;i++){
    a.push(0)
    e.push(0)
    for(let f = 0;f<20;f++){
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
for(let i = 0;i<2;i++){
    if (a[i] >= 12){
        console.log(" O aluno "+ i+ " foi APROVADO com " +a[i]+ " acertos " )
    }
    else{
        console.log(" O aluno "+ i+ " foi REPROVADO com " +a[i]+ " acertos ")
    }
}
