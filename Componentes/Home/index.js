import { CarouselDepoimentos } from "./carousselDepoimentos.js";


const anteriorDepoimentos = '[data-anterior-depoimentos]'
const proximoDepoimentos = '[data-proximo-depoimentos]'
const listaProdutosDepoimentos = '[data-lista-depoimentos]'
const navegacaoDepoimentos = '[data-navegacao-depoimentos]'

new CarouselDepoimentos(anteriorDepoimentos, proximoDepoimentos, listaProdutosDepoimentos, navegacaoDepoimentos)


import { CarouselTab } from "./carrouselTabs.js";


const anteriorTab = '[data-anterior-tab]'
const proximoTab = '[data-proximo-tab]'
const listaProdutosTab = '[data-lista-tab]'
const navegacaoTab = '[data-navegacao-tab]'

new CarouselTab(anteriorTab, proximoTab, listaProdutosTab, navegacaoTab)