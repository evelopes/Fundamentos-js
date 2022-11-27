const citricas = [["limão","Laranja","Melão"],["limão","Laranja","Melão"],["limão","Laranja","Melão"]];
const f = citricas[0].entries();
const g = citricas.entries();
console.log(f)

for (let x of f){
    console.log(x)
}

for (let y of g){
    console.log(y)
}