const {
    gets,
    print
} = require('./funcao-auxiliar');

const numerosorteados = gets();
let maiorNumero = 0;

for (let i = 0; i < numerosorteados; i++) {
    const numeroSorteios = gets();
    if (numeroSorteios > maiorNumero) {
        maiorNumero = numeroSorteios
    }
}

print(maiorNumero)