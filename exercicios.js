const peso = 67;
const altura = 1.60;
const imc = peso / Math.pow(altura, 2);


if (imc < 18.5) {
    console.log('Você está muito magrelo pqp, IMC igual a: ', imc)
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Você está bem normalzin, IMC igual a: ', imc)
} else if (imc > 25 && imc < 30) {
    console.log('Você está começando a fica pesadin, mas é o famoso gordin gostoso, IMC igual a: ', imc)
} else if (imc >= 30 && imc <= 40) {
    console.log('Tá obeso cacete, vai dar uma caminhadinha, IMC igual a: ', imc)
} else if (imc > 40) {
    console.log('Tá GORDO PRA KRL, Thais carla você? IMC igual a: ', imc)
}