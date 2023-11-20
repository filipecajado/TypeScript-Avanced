import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);
negociacao.qunatidade = 1000
console.log(negociacao)
