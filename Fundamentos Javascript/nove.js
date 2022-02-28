/*Uma amiga de Alex deu uma coleção de filmes para ela de presente, e Alex está animada para assistir todos eles 
o mais rápido possível. A duração dos filmes é dada em um vetor duracoes [n], onde o n é o número do filme, e 
cada filme dura entre 1.01 e 3.00 horas (até duas casas decimais). Alex quer gastar no máximo 3.00 horas 
assistindo filmes por dia, mas também quer assistir a coleção completa no mínimo números de dias possível. Alex 
nunca para de assistir um filme na metade. Isso é, se Alex escolheu um filme, Alex assistir um filme por completo 
no mesmo dia. Ache o número mínimo de dias necessários para assistir a coleção de filme completa.
Exemplo:
n = 5
duracoes = [ 1.90, 1.04, 1.25, 2.5, 1.75 ]

Considerando um passo a passo de 1 em 1, Alex consegue assistir os filmes em mínimo de 3 dias:
1. Dia 1: primeiro e segundos filmes: 1.90 + 1.04 = 2.94 _< 3.00
2. Dia 2: quarto filme: 2.5 _< 3.00
3. Dia 3: terceiro e quinto filmes: 1.25 + 1.75 = 3.00_<

Descrição da Função:
Complete a função acharMinimoDeDias

acharMinimoDeDias tem o seguinte parâmetro:
- float duracoes [n] : a duração de cada filme.

Retorna:
- int: o mínimo número de dias necessários para assistir todos os filmes.

Restrições:
1 _< n _< 1000
1.01 _< duracoes [i] _< 3.0*/

var duracoes = [5, 1.6, 2.5, 2.0, 1.01, 1.05,3.5, 1.6, 2.5, 2.0, 1.01, 1.05,3.5,1.98,1.24,1.68,1.23,1.34,1.42,1.36];

let somaDias = 0;
let  lista1 = []
let  lista2 = []
let lista3 = []
let lista4 = []
let somar = 0

let listaexcluidos = [];

duracoes.sort()
duracoes.forEach(funcaoLista)
function funcaoLista(lista) {
  if(lista <= 3){
    lista1.push(lista)
  }else {
    listaexcluidos.push(lista)
  }
  


lista1.forEach(funcaoLista2)
function funcaoLista2(lista){
  if(lista >= 2){
    somaDias = somaDias + 1
      }
      else if(lista < 2 && lista >= 1.5){
        lista2.push(lista)        
      }
      else if(lista1 < 1.5){
        lista3.push(lista)
     }
    }

   somar(lista2,lista3)
      function somar(lista2,lista3, index){  
        for (let index = 0; index < lista2.length; index++) {
            if(lista2[index] + lista3[index] < 3){
            somaDias = somaDias + 1
          }else if(lista2 + lista3 >= 3){
            lista4.push(a)
            lista4.push(b)                     
        }
        
      }
    }
      }
        console.log(lista3)

