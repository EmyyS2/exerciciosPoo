"use strict";
class Pessoa {
    constructor(nome, idade, comidas) {
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;
    }
    cumprimentar() {
        let msgHabilitação = " Já posso tirar minha CNH";
        if (this.idade < 18) {
            let msgHabilitação = " Não posso tirar minha CNH";
        }
        return "Olá meu nome é " + this.nome + " e eu tenho " + this.idade + " anos." + msgHabilitação + ".";
    }
    comidasFavoritas() {
        console.log("Minhas(s) comida(s) favoritas(s) ");
        for (let i = 0; i <= this.comidas.length; i++) {
            console.log(this.comidas[i]);
        }
    }
}
let pessoa1 = new Pessoa("Emy", 16, ["Sushi", "Fricassê", "Churras", "Eduardo", "Meu namorado"]);
console.log(pessoa1.cumprimentar());
console.log(pessoa1.comidasFavoritas());
