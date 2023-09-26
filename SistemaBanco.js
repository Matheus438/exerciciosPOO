"use strict";
class ContaBanco {
    constructor(numeroConta, saldo, titular) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }
    apresentar() {
        console.log("Este é " + this.titular + ", com o numero da conta:" + this.numeroConta + " com o saldo de R$" + this.saldo);
    }
}
class Corrente extends ContaBanco {
    constructor(limiteChequeEspecial) {
        super("1", 1000, "Matheus");
        this.limiteChequeEspecial = 10000;
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    saldoAtual() {
        return "Seu saldo atual é de R$" + this.saldo;
    }
    deposito(deposito) {
        this.saldo = this.saldo + deposito;
        return "Você depositou R$" + deposito + " agora seu saldo atuali é de R$" + this.saldo;
    }
    saque(saque) {
        let limiteSaque = this.limiteChequeEspecial + this.saldo;
        if (saque > limiteSaque) {
            return "Impossivel realizar o saque de R$"
                + saque + " pois seu limite é de R$" + this.limiteChequeEspecial;
        }
        else {
            this.saldo = this.saldo - saque;
            return "Você possuia R$" + (this.saldo + saque) + " em sua conta, você realizou um saque no valor de R$"
                + saque + ". " + " Seu saldo atual é de " + this.saldo;
        }
    }
    contaBancaria() {
        return 1;
    }
}
class Poupanca extends ContaBanco {
    constructor(calcularRendimentoAnual) {
        super("2", 1000, "Welington");
        this.calcularRendimentoAnual = 12;
        this.calcularRendimentoAnual = calcularRendimentoAnual;
    }
    saldoAtual() {
        return "Seu saldo atual é de R$" + this.saldo;
    }
    deposito(deposito) {
        this.saldo = this.saldo + deposito;
        return "Você depositou R$" + deposito + " agora seu saldo atuali é de R$" + this.saldo;
    }
    saque(saque) {
        if (saque > this.saldo) {
            return "Impossivel realizar o saque de R$"
                + saque + " pois você tem apenas R$" + this.saldo;
        }
        else {
            this.saldo = this.saldo - saque;
            return "Você possuia R$" + (this.saldo + saque) + " em sua conta, você realizou um saque no valor de R$"
                + saque + ". " + " Seu saldo atual é de " + this.saldo;
        }
    }
    RendimentoAnual(taxa) {
        return this.saldo * taxa + this.saldo;
    }
    contaBancaria() {
        return 1;
    }
}
class Conta {
    constructor() {
        this.saldo = 0;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("Saldo insuficiente.");
        }
    }
    consultarSaldo() {
        return this.saldo;
    }
}
class ContaPoupanca extends Conta {
    constructor() {
        super();
    }
    investir(valor, prazoMeses, taxaJuros) {
        const rendimento = valor * taxaJuros * prazoMeses;
        this.depositar(rendimento);
    }
}
class ContaInvestimento extends Conta {
    constructor() {
        super();
    }
    investir(valor, prazoMeses, taxaJuros) {
        const rendimento = valor * taxaJuros * prazoMeses * 0.8; // Considerando uma taxa de administração de 20%
        this.depositar(rendimento);
    }
}
const contaCorrente = new Corrente(10000);
contaCorrente.apresentar();
console.log(contaCorrente.saldoAtual());
console.log(contaCorrente.deposito(500));
console.log(contaCorrente.saque(115100));
console.log(contaCorrente.deposito(500));
const contaPoupanca = new Poupanca(12);
//contaPoupanca.apresentar();
//console.log(contaPoupanca.saldoAtual());
//console.log(contaPoupanca.deposito(500));
//console.log(contaPoupanca.saque(2000));
//console.log(contaPoupanca.RendimentoAnual(0.12));
