let calculo;
function fahrenheitToCelsius(fahrenheit) {
    calculo = ((fahrenheit - 32) / 1.8).toFixed(2)
    return calculo;
}

function kelvinToCelsius(kelvin) {
    calculo = ((kelvin - 273.15).toFixed(2));
    return calculo
}

function celsiusToFahrenheit(celcius) {
    calculo = ((celcius * 1.8) + 32).toFixed(2)
    return calculo
}

function celsiusToKelvin(celcius) {
    calculo = (celcius + 273.15).toFixed(2)
    return calculo;
}

// Conversão de	            para	            Fórmula
// grau Celsius         	grau Fahrenheit 	°F = °C × 1,8 + 32
// grau Fahrenheit        	grau Celsius	    °C = (°F − 32) / 1,8
// grau Celsius             kelvin	             K = °C + 273,15
// kelvin       	        grau Celsius	    °C = K − 273,15
