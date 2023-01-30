function solucao(a, b, c, d) {
    let diferenteDeZero = (a != 0 && b != 0 && c != 0 && d != 0);
    let saoIguais = (a == b && c == d && a == c);
    diferenteDeZero && saoIguais ? console.log("É quadrado"):console.log("não é quadrado");
     }


solucao(1,1,1,2)