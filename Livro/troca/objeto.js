function sair(saida) {
    console.log(saida);
}

/* Construtor objetos */
function Livro(titulo, autor, paginas, isbn, preco) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.isbn = isbn;
    this.preco = preco;
    this.unidades = 0;
    this.quantoCusta = function () {
        let nome = this.imprimeNome();
        let preco = this.retornaPreco();
        console.log(`${nome} \n ${preco}`)
    }
}

/* Criando funcoes para classe, fora dela */
Livro.prototype.imprimeNome = function () {
    return this.titulo + "(isbn:" + this.isbn + ")"
};

Livro.prototype.retornaPreco = function () {
    return "R$" + this.preco;
}




/* usando o construtor */
let novoLivro = new Livro('Persuasão', 'Jane Austen', 455, 9514568723, 49.85)
let novoLivro2 = new Livro('Orgulho e Preconceito', 'Jane Austen', 955, 1547568723, 98.65)
novoLivro.unidades = 149; //alterando valor: nomeVariavel.atributo = novoValor;
novoLivro2.unidades += 8;
/* sair(novoLivro) */



/* novoLivro.quantoCusta(); //chamando metodo quantoCusta */


/* novoLivro2.imprimeNome();
sair(novoLivro2.retornaPreco()); */

let teste = [];
teste.push(novoLivro);
teste.push(novoLivro2);/* 
sair(teste)
console.log(typeof (teste)) */

let exemploISBN = 1547568723;

buscaISBN(exemploISBN, teste)
function buscaISBN(valor, listaLivros) {
    for (let i = 0; i < listaLivros.length; i++) {
        if (listaLivros[i].isbn == valor) {
            return true;
        }
    }
}


buscaNome(exemploISBN, teste)
function buscaNome(valor, listaLivros) {
    for (let i = 0; i < listaLivros.length; i++) {
        if (listaLivros[i].isbn == valor) {
            return listaLivros[i].titulo;
        }
    }
}

function buscaUnidades(valor, listaLivros) {
    for (let i = 0; i < listaLivros.length; i++) {
        if (listaLivros[i].isbn == valor) {
            console.log(listaLivros[i].unidades + " unidades disponíveis!");
        }
    }
}





function cadastrarLivro(isbn, listaLivros) {
    let retorno = buscaISBN(isbn, listaLivros);
    if (retorno == true) {
        let title = buscaNome(isbn, listaLivros)
        console.log(`${title}, já foi cadastrado!`)
    } else {
        listaLivros.push(isbn)
    }

}
cadastrarLivro(exemploISBN, teste)

function temosOLivro(isbn, listaLivros) {
    let retorno = buscaISBN(isbn, listaLivros);
    if (retorno == true) {
        buscaUnidades(isbn, listaLivros);
    } else {
        console.log("Não encontramos o livro pro ISBN informado")
    }
}

temosOLivro(exemploISBN, teste)


console.log(teste[1].isbn)

