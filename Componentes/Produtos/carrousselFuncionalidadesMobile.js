export class CarouselFuncionalidadesMobile {
    constructor(anteriorFuncionalidadesMobile, proximoFuncionalidadesMobile, listaProdutosFuncionalidadesMobile, navegacaoFuncionalidadesMobile) {
        this.anteriorFuncionalidadesMobile = document.querySelector(anteriorFuncionalidadesMobile)
        this.proximoFuncionalidadesMobile = document.querySelector(proximoFuncionalidadesMobile)
        this.listaProdutosFuncionalidadesMobile = document.querySelector(listaProdutosFuncionalidadesMobile)
        this.navegacaoFuncionalidadesMobile = document.querySelector(navegacaoFuncionalidadesMobile)

        this.indicadoresFuncionalidadesMobile = this.getListaIndicadores()

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoFuncionalidadesMobile.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorFuncionalidadesMobile.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaProdutosFuncionalidadesMobile.children)
    }
    getListaIndicadores() {
        return Array.from(this.navegacaoFuncionalidadesMobile.children)
    }
    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width
    }

    getSlideAtual() {
        return this.slides[this.indiceDoSlideAtual]
    }
    getIndiceAtual() {
        return this.indicadoresFuncionalidadesMobile[this.indiceDoSlideAtual]
    }

    proximoSlide() {
        let proximaPosicao = this.indiceDoSlideAtual + 1
        if (proximaPosicao > this.slides.length - 1) {
            proximaPosicao = 0
        }

        this.vaParaSlide(proximaPosicao)
    }

    slideAnterior() {
        let posicaoAnterior = this.indiceDoSlideAtual - 1
        if (posicaoAnterior < 0) {
            posicaoAnterior = this.slides.length - 1
        }

        this.vaParaSlide(posicaoAnterior)
    }

    vaParaSlide(posicao) {
        const indicadorAtual = this.getIndiceAtual()
        this.indiceDoSlideAtual = posicao
        const indicadorSelecionado = this.getIndiceAtual()

        this.scrollParaSlide(this.getSlideAtual())
        this.atualizaIndicadores(indicadorAtual, indicadorSelecionado)
    }

    scrollParaSlide(slideSelecionado) {
        this.listaProdutosFuncionalidadesMobile.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }

    atualizaIndicadores(indicadorAtual, indicadorSelecionado){

    indicadorAtual.classList.remove('carousel__indicador--ativo-funcionalidades')

    indicadorSelecionado.classList.add('carousel__indicador--ativo-funcionalidades')
    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}