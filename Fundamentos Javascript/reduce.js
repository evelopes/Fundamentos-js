const arr = [3,2,1,2,7]

let arrayFiltrado = arr.filter(function(valor,proximo){
    return arr.indexOf(valor) == proximo;
});


const soma = arrayFiltrado.reduce((acum, atual) => atual + acum, 0)

console.log(soma)