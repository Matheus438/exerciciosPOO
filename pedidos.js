"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["AguardandoPedido"] = "Aguardando Preparo";
    StatusPedido["PreparoDoPedido"] = "Em preparo";
    StatusPedido["EntregaPedido"] = "Saiu para entrega";
    StatusPedido["Entregue"] = "Pedido entrgue";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedido.AguardandoPedido;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        return "Produto adicionado com sucesso";
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutosDoPedido() {
        console.log("Produtos de pedidos: ");
        for (let index = 0; index < this.produtos.length; index++) {
            console.log("Produto:" + this.produtos[index].nome + "R$" + this.produtos[index].valor.toFixed(2));
        }
    }
}
const produtoPedido = new ProdutoPedido("x-tudo ", 25);
const outroProdutoPedido = new ProdutoPedido("x-salada sem salada ", 35);
const novoPedido = new Pedido();
novoPedido.adicionarProduto(produtoPedido);
novoPedido.adicionarProduto(outroProdutoPedido);
novoPedido.atualizarStatus(StatusPedido.EntregaPedido);
console.log(novoPedido.exibirStatus());
console.log("status atual do pedido:" + novoPedido.exibirStatus());
novoPedido.exibirProdutosDoPedido();
