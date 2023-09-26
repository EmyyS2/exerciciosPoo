abstract class ContaBancariaDois {
    protected titular: string;
    protected saldoInicial: number;
    protected numeroConta: string;

    constructor(numeroConta: string, saldoInicial: number, titular: string) {
        this.titular = titular;
        this.saldoInicial = saldoInicial;
        this.numeroConta = numeroConta;
    }
    abstract depositar(valor: number): void;
    abstract sacar(valor: number): void;
    abstract consultarSaldo(): number;
}
class ContaCorrente extends ContaBancariaDois {
    private limiteChequeEspecial: number = 1000;

    constructor() {
        super( "123465", 1000, "Dudu")
        this.limiteChequeEspecial=this.limiteChequeEspecial;

    }
    depositar(valor: number): void {
        this.saldoInicial = this.saldoInicial + valor
        console.log("Olá "+this.titular+" seu deposito foi aceito, atualmenete o/a senhor(a) tem R$ "+this.saldoInicial);

    }
    sacar(valor: number): void {
        let sacar = "Olá " + this.titular + " dono(a) da conta de numero " + this.numeroConta + " seu saque foi negado " + "você tem R$ " + this.saldoInicial;
        if (valor < this.saldoInicial) (valor <= this.limiteChequeEspecial); {
            let sacar = "Olá " + this.titular + " dono(a) da conta de numero " + this.numeroConta + " seu saque foi aceito " + "você tem R$ " + this.saldoInicial;
            this.saldoInicial=valor-this.saldoInicial-this.limiteChequeEspecial
        } 
        console.log(sacar)

    }
    consultarSaldo(): number {
        this.saldoInicial = this.saldoInicial;
        console.log("Olá " + this.titular + " dono(a) da conta de número " + this.numeroConta + " você tem R$ " + this.saldoInicial);
        return this.saldoInicial;

    }
}
class ContaPoupanca extends ContaBancariaDois {
    constructor() {
        super("987632", 1000, "Emy")
    }
    depositar(valor: number): void {
        this.saldoInicial = this.saldoInicial + valor
        console.log("Olá "+this.titular+" seu deposito foi aceito, atualmenete o/a senhor(a) tem R$ "+this.saldoInicial);

    }
    sacar(valor: number): void {
        let sacar = "Olá " + this.titular + " dono(a) da conta de numero " + this.numeroConta + " seu saque foi negado, você tem R$ " + this.saldoInicial;
        if (valor > this.saldoInicial) {
            sacar = "Olá " + this.titular + " dono(a) da conta de numero " + this.numeroConta + " seu saque foi aceito, você tem R$ " + this.saldoInicial;
            
        }
        console.log(sacar);

    }
    consultarSaldo(): number {
        this.saldoInicial = this.saldoInicial;
        console.log("Olá " + this.titular + " dono(a) da conta de numero" + this.numeroConta + " você tem R$ " + this.saldoInicial);
        return this.saldoInicial;
    }
    calcularRendimentoAnual(taxa: number): number{
        taxa:0.2;
        this.saldoInicial=taxa * this.saldoInicial;
        console.log("Seu rendimento Anul foi de R$"+this.saldoInicial)
        return this.saldoInicial
    }
}
class ContaInvestimento extends ContaBancariaDois{
    constructor(){
        super("474757",3000, "Rick")
    }
    depositar(valor: number): void {
        this.saldoInicial = this.saldoInicial + valor
        console.log("Olá "+this.titular+" seu deposito foi aceito, atualmenete o/a senhor(a) tem R$ "+this.saldoInicial);

    }
    sacar(valor: number): void {
        let sacar = "Olá " + this.titular + " dono(a) da conta de numero" + this.numeroConta + " seu saque foi negado, você tem R$ " + this.saldoInicial;
        if (valor > this.saldoInicial) {
            sacar = "Olá " + this.titular + " dono(a) da conta de numero" + this.numeroConta + " seu saque foi aceito, você tem R$ " + this.saldoInicial;
            
        }
        console.log(sacar);

    }
    consultarSaldo(): number {
        this.saldoInicial = this.saldoInicial;
        console.log("Olá" + this.titular + "dono(a) da conta de numero" + this.numeroConta + " você tem R$ " + this.saldoInicial);
        return this.saldoInicial;
    }
     investir(valor: number, prazoMeses:
        number, taxaJuros: number): void{
            valor=20;
            prazoMeses=12
            taxaJuros=0.2
            valor*12*0.2+this.saldoInicial
        console.log("Olá" + this.titular + "dono(a) da conta de numero" + this.numeroConta + " seu investimento de "+valor+" deu resultados, agora você tem " + this.saldoInicial);

        }
}
const Dudu =new ContaCorrente();
Dudu.depositar(100);
Dudu.sacar(1300)
Dudu.sacar(900);
Dudu.consultarSaldo();


