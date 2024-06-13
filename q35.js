const prompt = require('prompt-sync')();
let a=[],b= [],n   
for(let i = 0;i<30;i++){
        n=parseFloat(prompt(" Escreva um número "))
        if (n%2==0){
            a.push(n)
            if(a.length==5){
                console.log(a)
                a=[]
            }
        }
        else{
            b.push(n)
            if(b.length==5){
                console.log(b)
                b=[]
            }
        }
}
console.log(a)
console.log(b)
