function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) / 1.8).toFixed(2);
}

function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
}

function celsiusToFahrenheit(celcius) {
    return ((celcius * 1.8) + 32).toFixed(2);
}

function celsiusToKelvin(celcius) {
    return (celcius + 273.15).toFixed(2);
}
