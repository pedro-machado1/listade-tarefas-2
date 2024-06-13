const prompt = require('prompt-sync')(); 
let qnt1= parseInt(prompt(" Qual o tamanho do primeiro seguimento?"))
let qnt2= parseInt(prompt(" Qual o tamanho do segundo seguimento?"))
let qnt3= parseInt(prompt(" Qual o tamanho do terceiro seguimento?"))
if (qnt1<= qnt2 + qnt3 && qnt2<= qnt1+ qnt3 && qnt3<= qnt1 + qnt2){
    console.log("Esses três segmentos podem formar um triângulo")
}
else{
    console.log("Esses três segmentos não podem formar um segmento")
}
