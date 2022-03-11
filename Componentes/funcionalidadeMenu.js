const menuAberto = document.querySelector('#menu-aberto-mobile')

const botaoAbreMenu = document.querySelector('#botao-menu__aberto')


const botaoFechaMenu = document.querySelector('#bota-fecha__menu')

const botaoDropdown = document.querySelector('#botao-dropdown')
const botaoFechaDropdown = document.querySelector(' #botao-fecha-dropdown ')

const conteudoDropdown = document.querySelector('#conteudo-dropdown')
const containerDropdown = document.querySelector('#container-conteudo')

const setaDropdown = document.querySelector('#seta-dropdown')
const vetorDropdown = document.querySelector('#vetor-seta-dropdown')


function abreMenu(){
    menuAberto.style.display = ` flex `
}

function fechaMenu(){
    menuAberto.style.top = ` -100% `
    menuAberto.style.display = ` none `

    menuAberto.style.animation = ` animaFechaMenu .6s ease-in-out fowards ` 
}

function abreDropdown(){
    if (conteudoDropdown.height = ` 0rem `) {
        conteudoDropdown.style.height = ` 17.4rem `
        containerDropdown.style.height = ` 17.4rem `

        botaoDropdown.style.display = ` none `
        botaoFechaDropdown.style.display = ` block `
        botaoFechaDropdown.style.color = ` #00BD62 `

        vetorDropdown.style.stroke = ` #00BD62 `
        setaDropdown.style.transform = ` rotate(180deg) `
    }
}

function fechaDropdown(){
        conteudoDropdown.style.height = ` 1.4rem `
        containerDropdown.style.height = ` 1.4rem `

        botaoDropdown.style.display = ` block `
        botaoFechaDropdown.style.display = ` none `

        vetorDropdown.style.stroke = ` #A3A3A3 `
        setaDropdown.style.transform = ` rotate(0deg) `
}
