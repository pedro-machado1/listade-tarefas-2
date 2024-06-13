t1= {
    id: 345,
    valor: 1000,
    data: "25/02/2024",
    categoria: 'transação bancária'
}
t2= {
    id: 356,
    valor: 2000,
    data: "25/02/2024",
    categoria: 'pix'
}
t3= {
    id: 1032,
    valor: 3000,
    data: "25/02/2024",
    categoria: 'transação bancária'
}
let a= [t1,t2,t3]

function categorias(array){
    let subtotal = {},listacat= {},a1=[]
    for (a of array){
        if (listacat[a.categoria]){
            subtotal[a.categoria] += a.valor
            listacat[a.categoria].push(a)
        }
        else{
        a1.push(a)
        listacat[a.categoria]= a1
        subtotal[a.categoria]= a.valor
        a1= []
        }
    }
    for (a in listacat){
        listacat[a].push('subtotal ' + subtotal[a])
    }
   return listacat
}

console.log(categorias(a))

