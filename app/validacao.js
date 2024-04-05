function verificarChute(chute) {
    chute = chute.replace('.', '')
    chute = chute.replace(',','.')
    const numero = +chute

    if (Number.isNaN(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML =  `
                <h2>Game Over</h2>
                <h3>Jogo encerrado pelo jogador</h3>
                <button id="jogar-novamente" class="btn-jogar-novamente">Jogar Novamente</button>
            `
            document.querySelector('html').setAttribute('status', 'game-over')
        }
        elementoChute.innerHTML += `<div>Valor inválido: Precisa ser um número</div>`
        return
    }

    if (numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML += `<div>Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML =  `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar-novamente">Jogar Novamente</button>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }

}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
        document.querySelector('html').setAttribute('status', 'ativo')
    }
})