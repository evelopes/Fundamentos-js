const alunos = ['João','Juliana','Caio','Ana']
const mediasDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

//includes retorna valor booleano
//indexOf retorna o valor do indice do termo pesquisado

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    }else{
        return "Aluno " + nomeDoAluno + " não está cadastrado"
    }
}

console.log(exibeNomeNota("Juliano"))