'use strict'

const interruptor = document.querySelector('.btn');

interruptor.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    // criar variável pra validar o tema
    var temaAtual = document.body.className;
    if ( temaAtual == "light-theme") {
        // trocar o texto dentro do botão
        this.textContent = "Dark";
    }
    else {
        // trocar o texto dentro do botão
        this.textContent = "Light";
    }

    console.log('current class name: ' + temaAtual);
});