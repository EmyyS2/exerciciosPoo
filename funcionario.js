"use strict";
class Funcionarios {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
class Gerente extends Funcionarios {
    constructor() {
        super("gerente", 15000);
    }
    calcularSalarioMensal() {
        let soma = this.salario;
        this.salario = soma * 0.10 + soma;
        console.log("O " + this.nome + " ganha R$ " + this.salario);
        return soma;
    }
}
class Desenvolvedor extends Funcionarios {
    constructor() {
        super("desenvolvedor", 5000);
    }
    calcularSalarioMensal() {
        let soma = this.salario;
        console.log("O " + this.nome + " ganha R$ " + this.salario);
        return soma;
    }
}
const gerente = new Gerente();
gerente.calcularSalarioMensal();
const desenvolvedor = new Desenvolvedor();
desenvolvedor.calcularSalarioMensal();
