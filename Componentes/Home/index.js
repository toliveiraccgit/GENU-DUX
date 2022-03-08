import { CarouselDepoimentos } from "./carousselDepoimentos.js";


const anteriorDepoimentos = '[data-anterior-depoimentos]'
const proximoDepoimentos = '[data-proximo-depoimentos]'
const listaProdutosDepoimentos = '[data-lista-depoimentos]'
const navegacaoDepoimentos = '[data-navegacao-depoimentos]'

new CarouselDepoimentos(anteriorDepoimentos, proximoDepoimentos, listaProdutosDepoimentos, navegacaoDepoimentos)
