const prompt = require('prompt-sync')();
a=[] , b= []
for( let i = 0; i<100; i++){
    a.push(parseInt(prompt(" Escreva o número ")))
}
for( let i = 0; i<100; i++){
    if (a[i]>0){
    b.push(a[i])
    }
}
console.log("Versão não compactada : " )
console.log(a)
console.log("Versão compactada : ")
console.log(b)

