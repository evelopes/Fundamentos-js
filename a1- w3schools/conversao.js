let valor;
let valor1;
let intermediario;
let escalas = ["Celsius","Fahrenheit","Kelvin"]

function qualAEscala() {
    let escala = document.getElementById("tipos").value;
    let grau = document.getElementById("graus").value;
    let graus = Number(grau.replace(",", "."))

    if (escala == 0){
        valor = celsiusToKelvin(graus) + " K";
        valor1 = celsiusToFahrenheit(graus) + " ºF";
        
    }else if(escala == 1){
        intermediario = fahrenheitToCelsius(graus);
        valor = celsiusToKelvin(intermediario) + " K";
        valor1 = intermediario + " ºC";
        
    }else if(escala == 2){
        intermediario = kelvinToCelsius(graus)
        valor = celsiusToFahrenheit(intermediario) + " ºF";
        valor1 = intermediario + " ºC";        
    }
    imprimir(valor1);
    imprimir(valor);
}


function imprimir(valor) {
    let result = document.getElementById("resposta");    //encontra elemento pai

    let elementoP = document.createElement("p");    //cria o elemento (tag)
    let valorConversao = document.createTextNode(valor);    //adiciona o conteúdo a variável
    elementoP.appendChild(valorConversao);  //coloca o conteúdo/variável ao elemento da tag
    result.appendChild(elementoP);   //adiciona o elemento ao elemento pai existente na página
}
