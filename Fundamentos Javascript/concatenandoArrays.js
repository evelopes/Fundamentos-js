const salaDePython = ['Melissa', 'Helena','Rodrigo']
const salaDeJavascript = ['Ju', 'Leo','Raquel']

const salasUnificadas = salaDePython.concat(salaDeJavascript) // cria um novo Array independente dos anteriores
console.log(salasUnificadas)

salaDePython.splice(1,2,'Aluno Novo')  
console.log(salaDePython)
console.log(salasUnificadas)     // teste para verificar a dependencia do salasUnificadas