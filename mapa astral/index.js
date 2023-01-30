import { Origin, Horoscope } from "circular-natal-horoscope-js";
const CepCoords = require("coordenadas-do-cep");


function pegaLatLof(cep) {
    CepCoords.getByCep(cep)
        .then(info => {
            //retorna o mesmo 'info' da versão em promise
        })
        .catch(err => {
            //retorna o mesmo parâmetro 'err' da versão em promise
        })
}

const lat = pegaLatLof(08793020)
console.log(lat)

const origin = new Origin({
    year: 2020,
    month: 11, // 0 = January, 11 = December!
    date: 1,
    hour: 16,
    minute: 30,
    latitude: 40.0,
    longitude: -70.0,
});