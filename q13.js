const prompt = require('prompt-sync')();
let n1= 1 , n2 = 1, array= []
array.push(n1)
array.push(n2) 
for ( let i = 0 ; i <13; i++){
    if(i% 2 == 0){
    n1+= n2
    array.push(n1)
    }
    
    else{
    n2+= n1
    array.push(n2)
    } 
}
console.log(array)

