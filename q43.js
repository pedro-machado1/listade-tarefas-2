const obj1= {n1:23, n2: 324, n3: 35}
const obj2= {n1: 67,         n3: 2, n4: 324, Nome:" Márcio"}
const obj3 = {}

for( let i in obj1){
    obj3[i]=obj1[i]
}
for( let i in obj2){
    obj3[i]=obj2[i]
}
console.log(obj3)