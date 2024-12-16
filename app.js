// Valores de conversión de monedas
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
};

// Convierte de dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar / 1.2) * 127.9;
    return valueInYen;
};

// Convierte de euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    // Convierte el valor dado en euros a dólares
    let valueInDollar = valueInEuro * 1.2;
    // Devuelve el valor en dólares
    return valueInDollar;
};

// Convierte de yenes a libras esterlinas
const fromYenToPound = function(valueInYen) {
    let valueInPound = (valueInYen / 127.9) * 0.8;
    return valueInPound;
};

// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
};

// Solo un registro en consola para nosotros
console.log(sum(7, 3));

// Exporta las funciones para usarlas en otros archivos
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
