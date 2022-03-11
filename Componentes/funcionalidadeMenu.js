const menuAberto = document.querySelector('#menu-aberto-mobile')

const botaoAbreMenu = document.querySelector('#botao-menu__aberto')

const botaoFechaMenu = document.querySelector('#bota-fecha__menu')


function abreMenu(){
    menuAberto.style.display = ` flex `
}

function fechaMenu(){
    menuAberto.style.top = ` -100% `
    menuAberto.style.display = ` none `

    menuAberto.style.animation = ` animaFechaMenu .6s ease-in-out fowards ` 
}
