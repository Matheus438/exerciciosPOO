"use strict";
class Funcionario {
    constructor(nome, cargo, salario) {
        this.inss = 11;
        this.IR = 7.5;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    imposto() {
        let valorDescontoInss = ((this.salario / 100) * this.inss);
        let salarioComDescontoInss = this.salario - valorDescontoInss;
        let valorImpostoDeRenda = ((salarioComDescontoInss / 100) * this.IR);
        return valorDescontoInss + valorImpostoDeRenda;
    }
    aumento(aumentos) {
        return "Aumento de " + aumentos + "% aplicado. Novo salário:" + (((this.salario / 100) * aumentos) + this.salario);
    }
    detalheDoFuncionario() {
        let imposto = this.imposto();
        return "Funcionario: " + this.nome + ", cargo: " + this.cargo + ", salario bruto R$" + this.salario + ", impostos: " + imposto + ", salrio liquido R$" + (this.salario - imposto);
    }
}
let funcionario = new Funcionario("Ana Silva", "Analista de Vendas", 3000);
let funcionario2 = new Funcionario("Mario Ayala", "Fiscal de Obras", 13000);
console.log(funcionario);
console.log(funcionario.imposto());
console.log(funcionario.aumento(10));
console.log(funcionario.detalheDoFuncionario());
console.log(funcionario2);
console.log(funcionario2.imposto());
console.log(funcionario2.aumento(10));
console.log(funcionario2.detalheDoFuncionario());
