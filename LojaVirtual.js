"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.listaDoCarrinho = [];
    }
    adicionarProduto(produtos) {
        this.listaDoCarrinho.push(produtos);
    }
    removerProduto(produtos) {
        this.listaDoCarrinho = this.listaDoCarrinho.filter((item) => item.nome !== produtos.nome);
        return "Produto removido";
    }
    somaDosProdutos() {
        let soma = 0;
        for (let i = 0; i < this.listaDoCarrinho.length; i++) {
            soma = this.listaDoCarrinho[i].preco + soma;
        }
        return "A soma dos produtos é:" + soma;
    }
    visualizar() {
        console.log("Os produtos são");
        for (let i = 0; i < this.listaDoCarrinho.length; i++) {
            console.log(this.listaDoCarrinho[i].nome + " com o valor de R$" + this.listaDoCarrinho[i].preco + " Produto adicionado com sucesso.");
        }
    }
}
class Loja {
    constructor() {
        this.estoqueProduto = [];
        this.carrinho = new CarrinhoDeCompras();
    }
    adicionarProdutoEstoque(produtos) {
        this.estoqueProduto.push(produtos);
        return "adicionado ao estoque da loja com secesso ";
    }
    removerProdutoEstoque(produto) {
        this.estoqueProduto = this.estoqueProduto.filter((item) => item.nome !== produto.nome);
        return "Produto removido do estoque da loja ";
    }
    adicionarProdutoNoCarrinho(produto) {
        const produtoEncontrado = this.estoqueProduto.find(item => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinho.adicionarProduto(produto);
            return "Produto adicionado ao carrinho de compras";
        }
        else {
            return "Produto não encontrado no estoque";
        }
    }
    removerProdutoDoCarrinho(produto) {
        const produtoEncontrado = this.estoqueProduto.find(item => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinho.removerProduto(produto);
            return "Produto removido do carrinho de compras";
        }
        else {
            return "Produto não encontrado no estoque";
        }
    }
    exibirEstoque() {
        if (this.carrinho.listaDoCarrinho.length > 0) {
            for (let i = 0; i < this.carrinho.listaDoCarrinho.length; i++) {
                console.log("Produto: " + this.carrinho.listaDoCarrinho[i].nome);
            }
        }
        else {
            return "nenhum produto adicionado ao carrinho";
        }
    }
    somaDosProdutos() {
        let soma = 0;
        for (let i = 0; i < this.carrinho.listaDoCarrinho.length; i++) {
            soma = this.carrinho.listaDoCarrinho[i].preco + soma;
        }
        return "A soma dos produtos é:" + soma;
    }
}
const produtos1 = new ProdutoLoja("iphone", 13000);
const produtos2 = new ProdutoLoja("Galaxy S2", 5130);
const produtos3 = new ProdutoLoja("Tenis Nike", 895);
const produtos4 = new ProdutoLoja("Dell G15", 4913);
const meuProduto = new CarrinhoDeCompras();
const estoqueLoja = new Loja();
meuProduto.adicionarProduto(produtos1);
meuProduto.adicionarProduto(produtos2);
meuProduto.adicionarProduto(produtos3);
meuProduto.adicionarProduto(produtos4);
console.log(meuProduto.visualizar());
console.log(meuProduto.somaDosProdutos());
console.log(meuProduto.removerProduto(produtos1));
console.log(meuProduto.visualizar());
console.log(meuProduto.somaDosProdutos());
console.log(estoqueLoja.adicionarProdutoEstoque(produtos4));
console.log(estoqueLoja.adicionarProdutoEstoque(produtos3));
console.log(estoqueLoja.adicionarProdutoNoCarrinho(produtos1));
console.log(estoqueLoja.adicionarProdutoNoCarrinho(produtos2));
console.log(estoqueLoja.adicionarProdutoNoCarrinho(produtos3));
console.log(estoqueLoja.adicionarProdutoNoCarrinho(produtos4));
console.log(estoqueLoja.removerProdutoDoCarrinho(produtos3));
console.log(estoqueLoja.removerProdutoEstoque(produtos3));
console.log(estoqueLoja.somaDosProdutos());
console.log(estoqueLoja.exibirEstoque());
