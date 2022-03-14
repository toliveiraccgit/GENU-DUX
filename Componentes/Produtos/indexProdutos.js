import { CarouselFuncionalidades } from "./carrousselFuncionalidades.js";


const anteriorFuncionalidades = '[data-anterior-funcionalidades]'
const proximoFuncionalidades = '[data-proximo-funcionalidades]'
const listaProdutosFuncionalidades = '[data-lista-funcionalidades]'
const navegacaoFuncionalidades = '[data-navegacao-funcionalidades]'

new CarouselFuncionalidades(anteriorFuncionalidades, proximoFuncionalidades, listaProdutosFuncionalidades, navegacaoFuncionalidades)


import { CarouselFuncionalidadesMobile } from "./carrousselFuncionalidadesMobile.js";


const anteriorFuncionalidadesMobile = '[data-anterior-funcionalidades-mobile]'
const proximoFuncionalidadesMobile = '[data-proximo-funcionalidades-mobile]'
const listaProdutosFuncionalidadesMobile = '[data-lista-funcionalidades-mobile]'
const navegacaoFuncionalidadesMobile = '[data-navegacao-funcionalidades-mobile]'

new CarouselFuncionalidadesMobile(anteriorFuncionalidadesMobile, proximoFuncionalidadesMobile, listaProdutosFuncionalidadesMobile, navegacaoFuncionalidadesMobile)