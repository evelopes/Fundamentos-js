 let a = [5,6,7]
 let b = [3,6,10]


let resultadoAlice = 0
let resultadoBob = 0
const resposta = [resultadoAlice, resultadoBob]
 
for(let i = 0; i < a.length; i++){	
if(a[i]> b[i]){
resultadoAlice += 1
} else if(a[i] < b[i]){
resultadoBob += 1
}
 
function chamaArrays(a,b){
	console.log(resposta)
}


console.log(chamaArrays(a,b))