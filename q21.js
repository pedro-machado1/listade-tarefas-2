const prompt = require('prompt-sync')();
let alt, sexo, peso
alt = parseFloat(prompt("Qual é a altura dessa pessoa em metro? "))
sexo = (prompt("Qual é o sexo da pessoa? M-MASCULINO F- FEMININO "))
if (sexo.charAt(0)== 'M'){
    peso= 72.7* alt-58
    console.log("o peso ideal para esse indivíduo é ", peso)
}
if (sexo.charAt(0)== 'F'){
    peso= 62.1* alt-44.7
    console.log("o peso ideal para esse indivíduo é ", peso)
}