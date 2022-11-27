function sair(saida) {
    console.log(saida);
}

function soma(a, b) {
    let conta = a + b;
    return sair(conta);
}

soma(79, 5)

export sair;