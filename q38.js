const prompt = require('prompt-sync')();
let vetor=[], numero, soma= 0 , produto = 1, media
function ordem(a,b){
    return a-b
}
for (let i =0; i<6; i++){
    vetor.push(prompt(" Escreva um dos números que será colocado no vetor: "))
}
numero = parseInt(prompt(" 1- soma de elementos; 2- produto dos elementos; 3- média dos elementeos; 4- ordena os elementos em ordem crescente; 5- mostra o vetor "))
if (numero == 1){
    for (let i = 0; i < 6; i++){
        soma+= vetor[i]
    }
    console.log(" A soma de todos elementos do vetor é "+ soma)
}
else if (numero == 2){
    for (let i = 0; i < 6; i+2){
        produto = vetor[i] * vetor [i+1]
    }   
    console.log(" O produto de todos os elementos do vetor é ", produto)
}
else if (numero == 3){
    for (let i = 0; i < 6; i++){
        soma+= vetor[i]
    }
    media= soma/6      
    console.log(" A média de todos os elementos do vetor é "+media.toFixed(2))
}
else if (numero == 4){
    console.log(vetor.sort(ordem))
    
}
else if (numero == 5){ 
    console.log(vetor)
}
else{
    console.log("Porfavaor insira um valor que tenha alguma funcionalidade.")
}