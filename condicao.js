const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const precoEtanol = 3.50;
const precoGasosa = 5;
const gastoMedioEtanol = 10;
const gastoMedioGasolina = 12;
const distanciaKm = 800;


readline.question(' Qual o tipo de combustivel ? ', tipoDeCombustivel => {
            readline.close()
            if (tipoDeCombustivel === 'etanol' || tipoDeCombustivel === 'alcool') {
                const litroPorKm = distanciaKm / gastoMedioEtanol
                const gastoFinal = litroPorKm * precoEtanol
                console.log("O gasto será de etanol de:", gastoFinal)
            } else if (tipoDeCombustivel === 'gasolina' || 'gasosa') {
                const litrosKm = distanciaKm / gastoMedioGasolina
                const gastoFinal = litrosKm * precoGasosa
                console.log("O gasto será de gasolina de:", gastoFinal)
            } else {
                console.log('não existe essa opção BURRO ANIMAL JEGUER')
            }
})

                


            // const papo = 1
            // const pipi = '1'
            // if (papo == pipi) {
            //     console.log ('pimbolas')
            // } else {
            //     console.log ('boiola')
            // }