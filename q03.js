const prompt = require('prompt-sync')(); 
let qnt= parseInt(prompt(" Qual a distância que você deseja percorrer? "))
if (qnt < 200){
    let valor = qnt * 0.50
    console.log("  A passagem custa " + valor+ " reais ")
}
else {
    valor = qnt * 0.45
    console.log("  A passagem custa " + valor+ " reais ")
}