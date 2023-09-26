"use strict";
class Animal {
    constructor(nome, patas) {
        this.nome = nome;
        this.patas = patas;
    }
    Apresentar() {
        console.log("Este é um " + this.nome + "com " + this.patas + "patas.");
    }
}
class Dog extends Animal {
    constructor() {
        super("Cachorro", 4);
    }
    FazerBarulho() {
        console.log("O cachorro está latindo");
    }
}
class Cat extends Animal {
    constructor() {
        super("Gato", 4);
    }
    FazerBarulho() {
        console.log("O gato está miando");
    }
}
class Bird extends Animal {
    constructor() {
        super("Pássaro", 2);
    }
    FazerBarulho() {
        console.log("O pássaro está cantando");
    }
}
const cachorro = new Dog();
cachorro.Apresentar();
cachorro.FazerBarulho();
const gato = new Dog();
gato.Apresentar();
gato.FazerBarulho();
const passaro = new Dog();
passaro.Apresentar();
passaro.FazerBarulho();
