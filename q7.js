const prompt = require('prompt-sync')(); 
let valor;
let carro= prompt(" Digite luxo se foi selecionado um carro de luxo ou digite popular se foi selecionado um carro popular")
let dias = parseInt(prompt("quantos dias o carro foi alugado?"))
let qnt = parseInt(prompt(" quantos quilômetros foram percorridos?"))
if (carro == "luxo") {
    valor = 150 * dias
    if (qnt <= 200){
        valor = valor + (0.3 * qnt)
        console.log("o valor total do aluguel foi " + valor+ " reais")
    }
    else{
        valor= valor + (0.25*qnt)
        console.log("o valor total do aluguel foi " + valor + " reais")
    }
}
else if (carro == "popular") {
    valor = 150 * dias
    if (qnt <= 100){
        valor = valor + (0.2 * qnt)
        console.log("o valor total do aluguel foi " + valor + " reais")
    }
    else{
        valor= valor + (0.10*qnt)
        console.log("o valor total do aluguel foi " + valor+ " reais" )
    }
}
else{
    console.log("digite novamente")
} 