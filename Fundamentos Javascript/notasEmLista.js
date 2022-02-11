const notas = [10, 6, 8]
console.log(notas)
notas.push(7)
console.log(notas)

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
const resultado = media >= 6 ? 'Aprovado' : 'Reprovado'
console.log(media + " " + resultado)

