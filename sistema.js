"use strict";
class Funcionario2 {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    apresentar() {
        console.log("Este é " + this.nome + " e ele recebe R$" +
            this.salario + " por mes ");
    }
}
class Gerente extends Funcionario2 {
    constructor() {
        super("Clayton", 15000);
    }
    calcularSalarioMensal() {
        return ((this.salario / 100) * 10 + this.salario);
    }
}
class Desenvolvedor extends Funcionario2 {
    constructor() {
        super("Clarymtom", 15000);
    }
    calcularSalarioMensal() {
        return this.salario;
    }
}
const gerente = new Gerente();
gerente.apresentar();
console.log("O gerente recebe R$" + gerente.calcularSalarioMensal() + " após o bonus");
const desenvolvedor = new Desenvolvedor();
desenvolvedor.apresentar();
console.log("O desenvolvedor recebe R$ " + desenvolvedor.calcularSalarioMensal());
