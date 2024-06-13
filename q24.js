let matriz = [],list=[],n, C=[]
for(let i = 0;i<8;i++){
C[i]=0
    for(let f=0;f<6;f++){
        n= Math.round(Math.random() * 2 +1) 
        list.push(n)
        if (n<0){
            C[i]++
            
        }
    }
    matriz.push(list)
    list= []
}
console.log(matriz)
console.log(C)