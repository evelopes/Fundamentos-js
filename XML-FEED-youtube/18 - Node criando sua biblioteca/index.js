const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function tratarErro(erro) {
    throw new Error(chalk.red('Não foi possivel processar o texto, verifique o ERRO:', erro.code));
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    }
    catch (erro) {
        tratarErro(erro)
    }
}



module.exports = pegaArquivo;








// console.log(chalk.blue('Vamos começar'))
// const paragrafo = 'Texto retornado por uma função';

// function texto(mensagem) {
    //     return mensagem
    // }
    
    
    
    // function pegaARquivo(caminhoDoArquivo) {
    //     const encoding = 'utf-8';
    //     fs.promises
    //         .readFile(caminhoDoArquivo, encoding)
    //         .then((texto) => chalk.green(console.log(texto)))
    //         .catch((erro) => tratarErro(erro))
    // }
    
    
    // function pegaArquivo(caminhoDoArquivo) {
    //     const encoding = 'utf-8';
    //     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
    //         if (erro) {
    //             tratarErro(erro);
    //         }
    //         console.log(chalk.green(texto))
    
    //     })
    // }
// console.log(texto(paragrafo))