"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.produtosDaLoja = [];
    }
    adicionarProduto(produtos) {
        this.produtosDaLoja.push(produtos);
    }
    removerProduto(produtos) {
        this.produtosDaLoja = this.produtosDaLoja.filter((item) => item.nome !== produtos.nome);
    }
}
const produtos1 = new ProdutoLoja("iphone", 13000);
const meuProduto = new CarrinhoDeCompras();
meuProduto.adicionarProduto(produtos1);
console.log(meuProduto.removerProduto(produtos1));
