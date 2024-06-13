const prompt = require('prompt-sync')(); 
let qnt= parseInt(prompt(" Qual é a velocidade do carro em km/h : "))
if (qnt < 80){
    console.log(" tudo certo, você não será multado")
}
else {
    let valor = (qnt - 80) * 5
    console.log(" Você foi multado")
    console.log(" PAGUE " + valor+ " reais ")
}