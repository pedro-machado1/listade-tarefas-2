let array= ["Pedro","Lucas","Guilherme","Pedro","Vicente","Guilherme"]; let count=[]
let obj1= {}
for( let val of array ){
    if ( obj1[val] ){ 
        obj1[val]+= 1 
    }
    else{
        obj1[val] = 1
    }
}
console.log(obj1)