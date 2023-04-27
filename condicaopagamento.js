// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;


const { normalize } = require('path');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const precoEtiqueta = 100.00;
const prazoMeses = 5;

readline.question('Qual será a forma de pagamento? ', formaDePagamento  => {
    readline.close()
    if (formaDePagamento === 'à vista débito' || formaDePagamento === 'débito') {
        const precoFinal = precoEtiqueta - (precoEtiqueta * 0.1)
        console.log('O preço no débito será R$%d ', precoFinal)
    } else if (formaDePagamento === 'à vista no dinheiro') {
      const precoFinal = precoEtiqueta - (precoEtiqueta * 0.15)
      console.log('O preço do produto no dinheiro será de R$%d', precoFinal)  
    } else if (formaDePagamento === 'PIX') {
        const precoFinal = precoEtiqueta - (precoEtiqueta * 0.15)
        console.log('O preço do produto no PIX será de R$%d', precoFinal)  
    } else if (formaDePagamento === 'dividi em duas vezes') {
        const precoFinal = precoEtiqueta / 2
        console.log('O preço de cada parcela será R$%d ',precoFinal)
    } else if (formaDePagamento === 'a prazo') {
            const precoFinal = (precoEtiqueta * 1.1) / prazoMeses
            console.log ('O preço parcelado em %d meses será R$%d cada.',prazoMeses, precoFinal) 
    }
})