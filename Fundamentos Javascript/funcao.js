function imprimeTexto(texto){
    console.log(texto)
};

/*
imprimeTexto("oi")
imprimeTexto("oi, outra vez")
*/
//três formas de escrever funções

imprimeTexto(soma())

function soma(){
    return 2 + 2 ;
};
/*
console.log(soma())*/