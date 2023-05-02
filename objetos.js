// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;



// class Carros 
// {
//     marca;
//     cor;
//     consumoMedioPorKm;

//     constructor (marca, cor, consumoMedioPorKm) {
//         this.marca = marca;
//         this.cor = cor;
//         this.consumoMedioPorKm = consumoMedioPorKm;
//     }

//     calcularGastoDaViagem(distancia, precoCombustivelLitro){
//        return (distancia / this.consumoMedioPorKm) * precoCombustivelLitro;
//     }
// }

// const cruze = new Carros('Chevrolet', 'Preto', 11);
// const polo = new Carros('Volkswagen', 'Branco', 15);

// console.log(cruze);
// console.log(cruze.calcularGastoDaViagem (800, 5));

// console.log(polo);
// console.log(polo.calcularGastoDaViagem(800, 5))

class Pessoas 
{
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoDeImc () {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc () {
        const imc = this.calculoDeImc();
        if (imc < 18.5) {
        return ('Você está muito magrelo pqp')
        } else if (imc >= 18.5 && imc <= 25) {
        return ('Você está bem normalzin')
        } else if (imc > 25 && imc < 30) {
        return ('Você está começando a fica pesadin, mas é o famoso gordin gostoso')
        } else if (imc >= 30 && imc <= 40) {
        return ('Tá obeso cacete, vai dar uma caminhadinha')
        } else if (imc > 40) {
        return ('Tá GORDO PRA KRL, Thais carla você?')
        }
    }
}

const José = new Pessoas ('José', 70, 1.75)
const Kelvin = new Pessoas ('Kelvin', 64, 1.72)

console.log(José)
console.log(José.calculoDeImc())
console.log(José.classificarImc())

console.log(Kelvin)
console.log(Kelvin.calculoDeImc())
console.log(Kelvin.classificarImc())