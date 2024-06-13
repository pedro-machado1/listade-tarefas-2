inventarioLojaA={
    celulares: 20,
    computadores: 10,
    calcualadoras: 30
} 
inventarioLojaB={
    livros: 30,
    calcualadoras: 13,
    camisetas: 80
}

function combinar(a, b){
obj = {}
for(let c in a){
    obj[c]= a[c]
}
for (let c in b){
    if (obj[c]){
        obj[c]+= b[c] 
    }
    else{
        obj[c]= b[c]
    }
}
return obj
}

console.log(combinar(inventarioLojaA,inventarioLojaB))