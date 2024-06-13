const prompt = require('prompt-sync')(); 
console.log(" Digite 1 para selecionar pedra, 2 para papel e 3 para tesoura")
let qnt1= parseInt(prompt(" selecione a sua opção jogador 1 "))
let qnt2= parseInt(prompt(" selecione a sua opção jogador 2 "))
switch(qnt1){
    case 1:
        switch(qnt2){
            case 1:
                console.log(" empate")
                break
            case 2:
                console.log (" o jogador 2 ganhou")
                break
            case 3: 
                console.log(" o jogador 1 ganhou")
                break
        }
        break
    case 2:
        switch(qnt2){
            case 1:
                console.log(" jogador 1 ganhou")
                break
            case 2:
                console.log (" empate")
                break
            case 3: 
                console.log(" jogador 2 ganhou")
                break
        }   
        break
    case 3:
        switch(qnt2){
            case 1:
                console.log(" jogador 2 ganhou")
                break
            case 2:
                console.log (" jogador 1 ganhou")
                break
            case 3: 
                console.log(" empate")
                break
        }
}
