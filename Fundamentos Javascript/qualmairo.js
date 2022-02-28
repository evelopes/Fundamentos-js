a = [5, 6, 7]
b = [3, 6, 10]

let resultadoAlice = 0
let resultadoBob = 0

function compareTriplets(a, b) {
    qualMaior(a,b)
    let resposta = [resultadoAlice, resultadoBob]
    console.log(resultadoAlice, resultadoBob)
}     

function qualMaior(a,b) {
for(let i = 0; i < a.length; i++){     
 if(a[i]> b[i]){
resultadoAlice = resultadoAlice + 1
} else if(a[i] < b[i]){
resultadoBob = resultadoBob + 1
}
}
}

compareTriplets(a,b)

