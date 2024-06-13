const prompt = require('prompt-sync')();
let hora= [], minuto=[],segundo=[]
let horario, horas , minutos , segundos
for (let i=0;i<5; i++){
horario = prompt("Escreva um horário no modelo HH.MM.SS ")
horario= horario.split(".")
hora.push(horario[0])
minuto.push(horario[1])
segundo.push(horario[2])
}
console.log("---------------")
for (let i=0;i<5; i++){
    if (hora[i]<24 && hora[i]>0){
        if (minuto[i]<60 && minuto[i]>0){
            if (segundo[i]<60 && segundo[i]>0){
                console.log(hora[i]+"."+minuto[i]+ "."+segundo[i])
            }
        }
    }
    else{
        console.log("A data  inserida", i+1," é inválida")
    }
}

