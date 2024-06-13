obj1 = {n1: 67,n2: 2, Nome:" Márcio",n3: 324, abc: "abc"}

console.log(qntString(obj1))

function qntString(obj){
    let cont = 0
    for(let i in obj ){
        if ( typeof obj[i] === 'string'){
                cont++
        }
    }
    return cont
}