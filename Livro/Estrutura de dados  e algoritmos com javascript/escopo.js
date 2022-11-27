var minhaVariavel = "global";
var minhaOutraVariavel = "global";

function minhaFuncao(){
    var minhaVariavel = "local";
    return minhaVariavel
}
function minhaOutraFuncao(){
    minhaOutraVariavel = "local";
    return minhaOutraVariavel
}

console.log(minhaVariavel)
console.log(minhaFuncao())
console.log(minhaOutraVariavel)
console.log(minhaOutraFuncao())
console.log(minhaOutraVariavel)