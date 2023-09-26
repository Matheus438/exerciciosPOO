"use strict";
class Animal {
    constructor(nome, qtdPatas) {
        this.nome = nome;
        this.qtdPatas = qtdPatas;
    }
    apresentar() {
        console.log("Este é um " + this.nome + " com " + this.qtdPatas + " patas.");
    }
}
class Dog extends Animal {
    constructor() {
        super("Cachorro", 4);
    }
    fazerBarulho() {
        console.log("O Cachorro está latindo");
    }
}
class Cat extends Animal {
    constructor() {
        super("Gato", 4);
    }
    fazerBarulho() {
        console.log("O gato esta miando");
    }
}
class Passaro extends Animal {
    constructor() {
        super("Pássaro", 2);
    }
    fazerBarulho() {
        console.log("O pássaro esta cantando");
    }
}
const dog = new Dog();
dog.apresentar();
dog.fazerBarulho();
const gato = new Cat();
gato.apresentar();
gato.fazerBarulho();
const passaro = new Passaro();
passaro.apresentar();
passaro.fazerBarulho();
