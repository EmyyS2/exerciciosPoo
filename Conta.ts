class ContaBancaria {
    nome: string;
    saldo: number;

    constructor(nome: string, saldo: number,) {
        this.nome = nome;
        this.saldo = saldo;
    }
    meuSaldo() {
        return "Olá " + this.nome + ", seu saldo é de $R$" + this.saldo;
    }

    deposito(deposito: number) {
this.saldo=this.saldo+deposito
        let msgdeposito = " seu deposito foi aceito"
        if (deposito < 2) {
            let msgdeposito = "seu deposito foi negado"

        }
        return "Olá " + this.nome + msgdeposito+", atualmente sua conta tem R$ "+this.saldo;
    }

    saque(saque: number) {
            let msgsaque= " seu saque foi aceito"
        if(saque>this.saldo){
            let msgsaque =" seu saque foi negado"
            return "Olá " + this.nome + msgsaque+", atualmente sua conta tem R$ "+this.saldo;
        } else {
            this.saldo=this.saldo-saque
return "Olá " + this.nome + msgsaque+", atualmente sua conta tem R$ "+this.saldo;
    }
    }

}
let joão = new ContaBancaria("João", 1000 );
console.log(joão.meuSaldo());
console.log("");
console.log(joão.deposito(500));
console.log(joão.saque(200));
console.log(joão.saque(1500));
console.log(".");
console.log(".");
console.log(".");

let Emy=new ContaBancaria("Emy", 2000)
console.log(Emy.meuSaldo());
console.log("");
console.log(Emy.deposito(500));
console.log(Emy.saque(200));
console.log(Emy.saque(1500));
console.log(".");
console.log(".");
console.log(".");

let Duardo=new ContaBancaria("Duardo", 4000)
console.log(Duardo.meuSaldo());
console.log("");
console.log(Duardo.deposito(500));
console.log(Duardo.saque(200));
console.log(Duardo.saque(1500));
