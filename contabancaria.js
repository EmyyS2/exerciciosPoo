"use strict";
class ContaBancariaDois {
    constructor(numeroConta, saldoInicial, titular) {
        this.titular = titular;
        this.saldoInicial = saldoInicial;
        this.numeroConta = numeroConta;
    }
}
class ContaCorrente extends ContaBancariaDois {
    constructor() {
        super("123465", 1000, "Dudu");
        this.limiteChequeEspecial = 1000;
        this.limiteChequeEspecial = this.limiteChequeEspecial;
    }
    depositar(valor) {
        this.saldoInicial = this.saldoInicial + valor;
        console.log("Olá " + this.titular + " seu deposito foi aceito, atualmenete o/a senhor(a) tem R$ " + this.saldoInicial);
    }
    sacar(valor) {
        let sacar = "Olá " + this.titular + " dono(a) da conta de numero " + this.numeroConta + " seu saque foi negado " + "você tem R$ " + this.saldoInicial;
        if (valor < this.saldoInicial)
            (valor <= this.limiteChequeEspecial);
        {
            let sacar = "Olá " + this.titular + " dono(a) da conta de numero " + this.numeroConta + " seu saque foi aceito " + "você tem R$ " + this.saldoInicial;
            this.saldoInicial = valor - this.saldoInicial - this.limiteChequeEspecial;
        }
        console.log(sacar);
    }
    consultarSaldo() {
        this.saldoInicial = this.saldoInicial;
        console.log("Olá " + this.titular + " dono(a) da conta de número " + this.numeroConta + " você tem R$ " + this.saldoInicial);
        return this.saldoInicial;
    }
}
class ContaPoupanca extends ContaBancariaDois {
    constructor() {
        super("987632", 1000, "Emy");
    }
    depositar(valor) {
        this.saldoInicial = this.saldoInicial + valor;
        console.log("Olá " + this.titular + " seu deposito foi aceito, atualmenete o/a senhor(a) tem R$ " + this.saldoInicial);
    }
    sacar(valor) {
        let sacar = "Olá " + this.titular + " dono(a) da conta de numero " + this.numeroConta + " seu saque foi negado, você tem R$ " + this.saldoInicial;
        if (valor > this.saldoInicial) {
            sacar = "Olá " + this.titular + " dono(a) da conta de numero " + this.numeroConta + " seu saque foi aceito, você tem R$ " + this.saldoInicial;
        }
        console.log(sacar);
    }
    consultarSaldo() {
        this.saldoInicial = this.saldoInicial;
        console.log("Olá " + this.titular + " dono(a) da conta de numero" + this.numeroConta + " você tem R$ " + this.saldoInicial);
        return this.saldoInicial;
    }
    calcularRendimentoAnual(taxa) {
        taxa: 0.2;
        this.saldoInicial = taxa * this.saldoInicial;
        console.log("Seu rendimento Anul foi de R$" + this.saldoInicial);
        return this.saldoInicial;
    }
}
class ContaInvestimento extends ContaBancariaDois {
    constructor() {
        super("474757", 3000, "Rick");
    }
    depositar(valor) {
        this.saldoInicial = this.saldoInicial + valor;
        console.log("Olá " + this.titular + " seu deposito foi aceito, atualmenete o/a senhor(a) tem R$ " + this.saldoInicial);
    }
    sacar(valor) {
        let sacar = "Olá " + this.titular + " dono(a) da conta de numero" + this.numeroConta + " seu saque foi negado, você tem R$ " + this.saldoInicial;
        if (valor > this.saldoInicial) {
            sacar = "Olá " + this.titular + " dono(a) da conta de numero" + this.numeroConta + " seu saque foi aceito, você tem R$ " + this.saldoInicial;
        }
        console.log(sacar);
    }
    consultarSaldo() {
        this.saldoInicial = this.saldoInicial;
        console.log("Olá" + this.titular + "dono(a) da conta de numero" + this.numeroConta + " você tem R$ " + this.saldoInicial);
        return this.saldoInicial;
    }
    investir(valor, prazoMeses, taxaJuros) {
        valor = 20;
        prazoMeses = 12;
        taxaJuros = 0.2;
        valor * 12 * 0.2 + this.saldoInicial;
        console.log("Olá" + this.titular + "dono(a) da conta de numero" + this.numeroConta + " seu investimento de " + valor + " deu resultados, agora você tem " + this.saldoInicial);
    }
}
const Dudu = new ContaCorrente();
Dudu.depositar(100);
Dudu.sacar(1300);
Dudu.sacar(900);
Dudu.consultarSaldo();
