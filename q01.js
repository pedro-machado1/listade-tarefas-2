const prompt = require('prompt-sync')(); 
let qnt= prompt("quantos cigarros você fuma diáriamente? ")
let anos = prompt (" Há quantos anos você fuma? ")
let mim= (anos* 365 * qnt)* 10
let dias = mim / 1440
console.log(" O fumante perdeu um total de " + Math.floor(dias) + " dias")