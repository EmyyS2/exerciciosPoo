enum StatusPedidos {
    AguardandoPreparo = "Aguardando Preparo",
    EmPreparo = "Em preparo",
    SaiuParaEntrega = "Saiu para Entrega",
    Entregue = "Entregue"
}

class ProdutoPedido {
    nome: string;
    preco: number;
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Pedidos {
    private produto: ProdutoPedido[];
    private status: StatusPedidos;


    constructor() {
        this.produto = [];
        this.status = StatusPedidos.AguardandoPreparo;
    }

    AdicionarPedido(pedido: ProdutoPedido) {
        this.produto.push(pedido);
        return "produto adicionado com sucesso"

    }

    atualizarStatus(status: StatusPedidos) {
        this.status = status;
        return this.status
    }
    exibirStatus() {
        return this.status
        


    }
    exibirProdutosDoPedido() {
        console.log("Produtos do Pedido: ")
        for (let index = 0; index < this.produto.length; index++) {
            console.log("O produto: "+this.produto[index].nome + " custando R$" + this.produto[index].preco.toFixed(2));
        }
    }
}
const produtoPedido= new ProdutoPedido("Kuromi", 100);
const outroProdutoPedido=new ProdutoPedido("Hello kitty",150);
const novoPedido = new Pedidos();
novoPedido.AdicionarPedido(produtoPedido);
novoPedido.AdicionarPedido(outroProdutoPedido);
console.log("Status atual do pedido: "+novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedidos.EmPreparo);
console.log("Status atual do seu pedido:"+novoPedido.exibirStatus());
console.log(novoPedido.exibirProdutosDoPedido());




