const {
    entrada,
    print
} = require('./funcao-auxiliar');

const numerosorteados = entrada;
let maiorNumero = 0;

// for (let i = 0; i < numerosorteados.length ; i++) {
//     const numeroSorteado = entrada[i];
//     if (numeroSorteado > maiorNumero) {
//         maiorNumero = numeroSorteado;
//     }
// }

for(const numeroSorteado of entrada) {
    if (numeroSorteado > maiorNumero) {
     maiorNumero = numeroSorteado;
    }
}

print(maiorNumero)