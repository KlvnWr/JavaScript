const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const precoEtanol = 3.50;
const precoGasosa = 5;
const gastoMedioEtanol = 10;
const gastoMedioGasolina = 12;
const distanciaKm = 1000;

let gastoFinal
                switch (tipoDeCombustivel) {
                    case 'etanol':
                    case 'alcool':
                        const litroPorKm = distanciaKm / gastoMedioEtanol
                        gastoFinal = litroPorKm * precoEtanol
                        console.log("O gasto será de etanol de:", gastoFinal)
                        break
                    case 'gasolina':
                    case 'gasosa':
                        const litrosKm = distanciaKm / gastoMedioGasolina
                        gastoFinal = litrosKm * precoGasosa
                        console.log("O gasto será de gasolina de:", gastoFinal)
                        break
                    default:
                        console.log('BURRO JAGUAR RRRRRRRRR')
                        break
                }