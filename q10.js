const prompt = require('prompt-sync')();
let soma = 0, menor= Number.MAX_VALUE, media,par= 0, valor, cont=0
do {
    let n1 = parseFloat(prompt("Digite um número"))
    if (menor > n1 ){
        menor = n1
    }
    if ( n1% 2 == 0 ){
        par = par+1
    }
    let n2 = parseFloat(prompt("Digite um número"))
    if (menor > n2 ){
        menor = n2
    }
    if ( n2% 2 == 0 ){
        par = par+1
    }
    let n3 = parseFloat(prompt("Digite um número"))
    if (menor > n3 ){
        menor = n3
    }
    if ( n3% 2 == 0 ){
        par = par+1
    }
    soma= soma + n1 + n2 + n3 
    cont= cont + 3 
    valor = parseInt(prompt(" Se você deseja parar digite 1, caso deseje continuar digite qualquer outro número"))
} while( valor != 1)
media = soma/ cont
console.log("A soma total dos número é " + soma )
console.log("O menor número digitado foi " + menor )
console.log("A média de todos os números foi " + media )
console.log("No total " + par + " números eram pares")
