enum StatusPedido {
    AguardandoPedido = "Aguardando Preparo",
    PreparoDoPedido = "Em preparo",
    EntregaPedido = "Saiu para entrega",
    Entregue = "Pedido entrgue"
}

class ProdutoPedido {
    nome: string;
    valor: number;

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
    }
}

class Pedido {
    private produtos: ProdutoPedido[];
    private status: StatusPedido

    constructor() {
        this.produtos = [];
        this.status = StatusPedido.AguardandoPedido;
    }

    adicionarProduto(produto: ProdutoPedido) {
        this.produtos.push(produto);
        return "Produto adicionado com sucesso"

    }

    atualizarStatus(status : StatusPedido){
        this.status = status;
        
    }

    exibirStatus(){
        return this.status;
    }

    exibirProdutosDoPedido(){
        console.log("Produtos de pedidos: ");
        for (let index = 0; index <this.produtos.length; index++){
            console.log("Produto:" + this.produtos[index].nome + "R$" + this.produtos[index].valor.toFixed(2));
        }

    }
}

const produtoPedido = new ProdutoPedido("x-tudo ", 25);
const outroProdutoPedido = new ProdutoPedido("x-salada sem salada ", 35);
const novoPedido = new Pedido();
novoPedido.adicionarProduto(produtoPedido);
novoPedido.adicionarProduto(outroProdutoPedido);
novoPedido.atualizarStatus(StatusPedido.EntregaPedido)
console.log(novoPedido.exibirStatus());
console.log("status atual do pedido:" + novoPedido.exibirStatus())
novoPedido.exibirProdutosDoPedido()