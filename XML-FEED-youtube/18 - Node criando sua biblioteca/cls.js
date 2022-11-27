const chalk = require('chalk');
const pegaArquivo = require('./index');

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = pegaArquivo(caminhoDoArquivo[2])
    console.log(chalk.yellow('Lista de links'), await resultado)
}

processaTexto(caminho)

