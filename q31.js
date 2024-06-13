const prompt = require('prompt-sync')();
let matriz = [],a=[],n,n2, X=[], r=[],cont=0
n2 = parseFloat(prompt("Escreva um número "))   
for(let i = 0;i<30;i++){
    for(let f=0;f<30;f++){
        n=parseFloat(prompt(" Escreva o elemento da matriz na linha "+ (i+1)+ " e na coluna "+ (f+1)+ " ", "0"))
        a.push(n)
        if( n != n2){
            r.push(n)    
        }
        else    {
            cont +=1  
        }
    }
    matriz.push(a)
    X.push(r)
    a= []
    r= []
}
console.log("O total de números da matriz que são iguais ao número selecionado é "+cont)
console.log("A matriz sem o número"+n2 +" é igual a ")
console.log(X)
// devolvo matriz ou só os números
