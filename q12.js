const prompt = require('prompt-sync')();
let n1= 1 , n2 = 1 
console.log(n1)
console.log(n2)
for ( let i = 0 ; i <8; i++){
    if(i% 2 == 0){
    n1+= n2
    console.log(n1)
    }
    
    else{
    n2+= n1
    console.log(n2)
    } 
}
