"use strict";
class ProdutoLoja {
    constructor(nomeDoProduto, precoDoProduto) {
        this.nome = nomeDoProduto;
        this.preco = precoDoProduto;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.produtosDoCarrinho = [];
        //this.produtosDoCarrinho=[]
    }
    adicionarProduto(produto) {
        this.produtosDoCarrinho.push();
    }
    excluirProduto(produto) {
        this.produtosDoCarrinho = this.produtosDoCarrinho.filter(item => item.nome !== produto.nome);
    }
    excluirProduto2(nomeDoProduto) {
        this.produtosDoCarrinho = this.produtosDoCarrinho.filter(item => item.nome !== nomeDoProduto);
    }
    calcularValorTotal() {
        let soma = 0;
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            soma = soma + this.produtosDoCarrinho[i].preco;
        }
        return "sua compra deu R$ " + soma.toFixed(2);
    }
    exibirProdutos() {
        console.log("Produtos do Carrinho");
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            console.log("Produto: " + this.produtosDoCarrinho[i].nome + "R$ " + this.produtosDoCarrinho[i].preco.toFixed(2));
        }
    }
}
class Loja {
    constructor() {
        this.produtosDoEstoque = [];
        this.carrinhoDeCompras = new CarrinhoDeCompras;
    }
    adicionarProdutoAoEstoque(produto) {
        this.produtosDoEstoque.push(produto);
    }
    removerProdutoDoEstoque(produto) {
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== produto.nome);
    }
    adicionarProdutoAoCarrinho(produto) {
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinhoDeCompras.adicionarProduto(produtoEncontrado);
            return "Produto adicionado no seu carrinho";
        }
        else {
            return "produto não encontrado no nosso estoque";
        }
    }
    removerProdutoDoCarrinho(produto) {
        this.carrinhoDeCompras.excluirProduto(produto);
        //this.carrinhoDeCompras.excluirProduto2(produto.nome)
    }
    exibirProdutosDoCarrinho() {
        this.carrinhoDeCompras.exibirProdutos();
    }
}
const produtoLoja1 = new ProdutoLoja("Maleta", 29.99);
const produtoLoja2 = new ProdutoLoja("Palitó", 49.99);
const produtoLoja3 = new ProdutoLoja("Sapatos", 79.90);
const produtoLoja4 = new ProdutoLoja("Abotoaduras", 90.00);
const minhaloja = new Loja();
minhaloja.adicionarProdutoAoEstoque(produtoLoja1);
minhaloja.adicionarProdutoAoEstoque(produtoLoja2);
minhaloja.adicionarProdutoAoEstoque(produtoLoja3);
minhaloja.adicionarProdutoAoEstoque(produtoLoja4);
minhaloja.adicionarProdutoAoCarrinho(produtoLoja1);
minhaloja.adicionarProdutoAoCarrinho(produtoLoja2);
minhaloja.adicionarProdutoAoCarrinho(produtoLoja3);
minhaloja.adicionarProdutoAoCarrinho(produtoLoja4);
minhaloja.removerProdutoDoCarrinho(produtoLoja4);
minhaloja.removerProdutoDoEstoque(produtoLoja4);
minhaloja.exibirProdutosDoCarrinho();
console.log("Total do carrinho de compras R$ " + minhaloja.carrinhoDeCompras.calcularValorTotal);
