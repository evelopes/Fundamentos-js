const chave = '10217730441332824';
const valor = '/731';
const api = fetch(`https://superheroapi.com/api/10217730441332824`);
let options = {
    method: 'POST', headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(valor),
};

fetch(api, options)
    .then(response => resultados(response))
    .catch(error => console.log(error));

function resultados(resp) {
    console.log(resp.url)
}



