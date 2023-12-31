"use strict";
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    vejaProduto() {
        return "Produto " + this.nome + " por R$" + this.preco + " Reais";
    }
    vejaDesconto(desconto) {
        return "Desconto de " + desconto + "% aplicado. Novo preço R$ " + (this.preco = this.preco * desconto / 100);
    }
}
let produto1 = new Produto("Hello Kitty", 100);
let produto2 = new Produto("My melody", 150);
let produto3 = new Produto("Kuromi", 200);
console.log(produto1.vejaProduto());
console.log(produto1.vejaDesconto(50));
console.log();
console.log(produto2.vejaProduto());
console.log(produto2.vejaDesconto(75));
console.log();
console.log(produto3.vejaProduto());
console.log(produto3.vejaDesconto(50));
