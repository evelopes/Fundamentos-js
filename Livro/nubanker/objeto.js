/* Formas de declarar objetos */
let objeto = new Object();
let objeto2 = {};
let objeto3 = {
    name: {
        first: 'Eve',
        last: 'developer'
    },
    endereco: {
        rua: 'aniz',
        numero: 155
    }
}
/* sair(objeto3) */

/* Construtor objetos */
function Livro(titulo, paginas, isbn, preco) {
    this.titulo = titulo;
    this.paginas = paginas;
    this.isbn = isbn;
    this.preco = preco;
    this.unidades = 0;
    this.quantoCusta = function () {
        let nome = this.imprimeNome();
        let preco = this.retornaPreco();
        console.log(nome + "\n" + preco)
    }
}

/* Criando funcoes para classe, fora dela */
Livro.prototype.imprimeNome = function () {
    return this.titulo
};

Livro.prototype.retornaPreco = function () {
    return "R$" + this.preco;
}




/* usando o construtor */
let novoLivro = new Livro('Persuasão', 455, 9514568723, 49.85)
let novoLivro2 = new Livro('Orgulho e Preconceito', 955, 1547568723, 98.65)
/* sair(novoLivro) */
novoLivro.paginas = 149; //alterando valor: nomeVariavel.atributo = novoValor;
novoLivro2.unidades += 8;
/* sair(novoLivro)  */



/* novoLivro.quantoCusta(); //chamando metodo quantoCusta */


/* novoLivro2.imprimeNome();
sair(novoLivro2.retornaPreco()); */

let teste = [];
teste.push(novoLivro);
teste.push(novoLivro2);/* 
sair(teste)
console.log(typeof (teste)) */

let exemploISBN = 15475687239;

buscaISBN(exemploISBN, teste)
function buscaISBN(valor, listaLivros) {
    for (let i = 0; i < listaLivros.length; i++) {
        if (listaLivros[i].isbn == valor) {
            return true;
        }
    }
}
cadastrarLivro(exemploISBN, teste)



function buscaUnidades(valor, listaLivros) {
    for (let i = 0; i < listaLivros.length; i++) {
        if (listaLivros[i].isbn == valor) {
            console.log(listaLivros[i].unidades);
        }
    }
}





function cadastrarLivro(isbn, listaLivros) {
    let retorno = buscaISBN(isbn, listaLivros);
    if (retorno == true) {
        console.log("Esse livro já foi cadastrado")
    } else {
        listaLivros.push(isbn)
    }

}

function temosOLivro(isbn, listaLivros) {
    let retorno = buscaISBN(isbn, listaLivros);
    if (retorno == true) {
        buscaUnidades(isbn, listaLivros);
    } else {
        console.log("Não encontramos o livro pro ISBN informado")
    }
}

temosOLivro(exemploISBN, teste)

/* 
console.log(teste[1].isbn) */






function sair(saida) {
    console.log(saida);
}

