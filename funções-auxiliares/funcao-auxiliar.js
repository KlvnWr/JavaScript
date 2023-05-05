const entrada = [5, 50, 10, 11, 23, 25, 503, 103, 200, 2321, 123];
let i = 0;

function gets() {
    const valor = entrada[i];
    i++;
    return valor;
}

function print(texto) {
    console.log (texto)
}

module.exports = {gets, print};