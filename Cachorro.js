"use strict";
class Cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentar() {
        return "Oi, eu sou " + this.nome + " um " + this.raca + " de " + this.idade + " anos";
    }
    apresentarPara(humano) {
        return "Ola " + humano + ", eu sou " + this.nome + ", um " + this.raca + "e tenho " + this.idade + "anos";
    }
}
let cachorro = new Cachorro("tors", "Pastor Alemão", 3);
let cachorrodois = new Cachorro("juli", "shih tzu", 3);
console.log(cachorro);
console.log(cachorrodois);
console.log(cachorro.apresentar());
console.log(cachorrodois.apresentar());
console.log(cachorrodois.apresentarPara("Matheus"));
