let matriz = [],list=[]
for(let i = 0;i<7;i++){
    for(let f=0;f<7;f++){
        if (f==i){
            list.push(1)
        }
        else{
            list.push(0)
        }
    }
    matriz.push(list)
    list= []
}
console.log(matriz)