// function calcularimc(peso, altura){
//     return peso / Math.pow(altura, 2);
// }

// function classificarimc(imc){
//     if (imc < 18.5) {
//         return 'Você está muito magrelo pqp, imc igual a: '+ imc;
//     } else if (imc >= 18.5 && imc <= 25) {
//         return 'Você está bem normalzin, imc igual a: '+ imc;
//     } else if (imc > 25 && imc < 30) {
//         return 'Você está começando a fica pesadin, mas é o famoso gordin gostoso, imc igual a: ' + imc;
//     } else if (imc >= 30 && imc <= 40) {
//         return 'Tá obeso cacete, vai dar uma caminhadinha, imc igual a: '+ imc;
//     } else if (imc > 40) {
//         return 'Tá GORDO PRA KRL, Thais carla você? imc igual a: '+ imc;
//     }
// }

// (function(){
//     const peso = 67;
//     const altura = 1.60;
//     const imc = calcularimc(peso, altura);
//     console.log(classificarimc(imc));
// })();

// function nomear(name){
//     return 'Meu nome é ' + name;
// }

// function escreverIdade (age){
//     if (age >= 18){
//         console.log (nomear('Kelvin\n') + 'Você é de maior');
//     } else {
//         return('Você ainda não pode beber\n' + (nomear('Larissa, amor de kelvin')));
//     }
// }

// escreverIdade (18);
// const idade = escreverIdade(18);
// console.log (idade)

function descontoAplicado(precoEtiqueta, desconto){
    return precoEtiqueta - (precoEtiqueta * (desconto/100));
}

function jurosAplicado(precoEtiqueta, juros){
    return precoEtiqueta + (precoEtiqueta * (juros/100));
}

function precoFinal (formaDePagamento){
    if (formaDePagamento === 1) {
        console.log (descontoAplicado(100, 10));
    } else if (formaDePagamento === 2) {
        console.log(descontoAplicado(100, 15));
    } else if (formaDePagamento === 3) {
        console.log(precoEtiqueta);
    } else if (formaDePagamento === 4){
        console.log(jurosAplicado(100, 10));
    }
}

precoFinal (1)
