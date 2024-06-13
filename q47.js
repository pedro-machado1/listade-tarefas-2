objeto = {
    n1: 23,
    n2: 35,
    n3: 42
}
function teste(a){
    a= a*2
    return a
}
function todos(obj, func){
subtotal = {}    
    for(let b in obj){
    subtotal[b] = func(obj[b])
    }
return subtotal
}
console.log(todos(objeto, teste))