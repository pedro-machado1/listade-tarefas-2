const prompt = require('prompt-sync')();
let nome , lista= [], idade, listaidade = [], confere= 0
for (let i=0 ; i < 9 ; i++){
    nome= prompt("Escreva o nome ")
    lista.push(nome)
    idade= parseInt(prompt("Escreva a idade "))
    listaidade.push(idade)
}
for (let i=0 ; i < 9 ; i++){
    if (listaidade[i]< 18){
        console.log(" nome:", lista[i])
        console.log(" idade:", listaidade[i])
        confere++
    }
}
if (confere==0){
    console.log("Nenhuma das pessoas são menores de idade")
}