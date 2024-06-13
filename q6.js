const prompt = require('prompt-sync')(); 
let numero= Math.floor(Math.random()* 5) +1
let n1 = parseInt(prompt(" Digite um número de 1 a 5 "))
if (n1== numero){
    console.log("Você ganhou")
}
else{
    console.log("Você perdeu, o número correto era " + numero)
}
