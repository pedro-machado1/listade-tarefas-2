venda1= {
    vendedor: "Pedro",
    valor: 300
}
venda2= {
    vendedor: "Marcos",
    valor: 1000
}
venda3= {
    vendedor: "Pedro",
    valor: 100
}
array = [venda1, venda2, venda3]
let subtotal= 0
console.log(valorVendedor(array))

function valorVendedor(a){
    let obj= {}
    for ( let i in a ){
        for(let v in a[i]){
            if (typeof a[i][v] == 'string' ){
                subtotal= a[i][v]
            }   
            else{
                if (obj[subtotal]){
                    obj[subtotal]+= a[i][v]
                }
                else{
                    obj[subtotal]= a[i][v]
                }
            }                
        }
    }
    return obj
}