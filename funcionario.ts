abstract class Funcionarios {
    protected nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }
    abstract calcularSalarioMensal(): number;
}

class Gerente extends Funcionarios{
    constructor(){
        super("Túlio", 15000);
    }
    calcularSalarioMensal(): number{
        let soma = this.salario;
        this.salario= soma * 0.10 + soma;
        console.log("Este é o "+this.nome+ " ele ganha R$ "+this.salario);
        return soma;
}
}

class Desenvolvidor extends Funcionarios{
    constructor(){
        super("Marcos", 5000)
    }
calcularSalarioMensal(): number {
    let soma = this.salario;
        console.log("Este é o "+this.nome+ " ele ganha R$ "+this.salario);
        return soma;
}
}
const Túlio = new Gerente();
Túlio.calcularSalarioMensal();

const Marcos=new Desenvolvidor();
Marcos.calcularSalarioMensal();
