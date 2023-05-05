const entrada = [5, 50, 10, 11, 23, 51, 52, 103, 200, 2321, 12];

function gets() {
    let i = 0;
    const valor = entrada[i];
    i++;
    return valor;
}

function print(texto) {
    console.log (texto)
}

module.exports = {entrada, print};