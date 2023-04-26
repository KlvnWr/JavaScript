const peso = 67;
const altura = 1.60;
const IMC = peso / Math.pow(altura, 2);


if (IMC < 18.5) {
    console.log('Você está muito magrelo pqp, IMC igual a: ', IMC)
} else if (IMC >= 18.5 && IMC <= 25) {
    console.log('Você está bem normalzin, IMC igual a: ', IMC)
} else if (IMC > 25 && IMC < 30) {
    console.log('Você está começando a fica pesadin, mas é o famoso gordin gostoso, IMC igual a: ', IMC)
} else if (IMC >= 30 && IMC <= 40) {
    console.log('Tá obeso cacete, vai dar uma caminhadinha, IMC igual a: ', IMC)
} else if (IMC > 40) {
    console.log('Tá GORDO PRA KRL, Thais carla você? IMC igual a: ', IMC)
}