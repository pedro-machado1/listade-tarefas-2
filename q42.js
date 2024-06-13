const dados = { n1: 23, n2: 34, matriz : [[1,4], [2,4]], local: "Brasil", vetor: [2,3,4]}
x= {}
for( let i in dados ){
    if (Array.isArray(dados[i])== true){
    x[i]=dados[i]
    }
}
console.log(x) 