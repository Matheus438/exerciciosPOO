class ProdutoLoja{
    nome:string;
    preco:number;

    constructor(nome:string, preco:number){
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoDeCompras{
    produtosDaLoja: ProdutoLoja [] = [];

    constructor(){

    }

    adicionarProduto(produtos:ProdutoLoja){
        this.produtosDaLoja.push(produtos);
    }
    
    removerProduto(produtos:ProdutoLoja){
        this.produtosDaLoja = this.produtosDaLoja.filter((item)=> item.nome !== produtos.nome)
    }

}

const produtos1 = new ProdutoLoja("iphone", 13000)

const meuProduto = new CarrinhoDeCompras();
meuProduto.adicionarProduto(produtos1);
console.log(meuProduto.removerProduto(produtos1));
