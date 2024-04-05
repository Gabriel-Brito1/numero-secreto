const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

const spanMenorValor = document.querySelector('#menor-valor')
const spanMaiorValor = document.querySelector('#maior-valor')

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

spanMenorValor.textContent = menorValor
spanMaiorValor.textContent = maiorValor

console.log('Numero Secreto: ' + numeroSecreto)