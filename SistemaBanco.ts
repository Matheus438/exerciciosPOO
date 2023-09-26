abstract class ContaBanco {
    protected numeroConta: string;
    protected saldo: number;
    protected titular: string;

    constructor(numeroConta: string, saldo: number, titular: string) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular
    }
    abstract contaBancaria(): number;
    apresentar(): void {
        console.log("Este é " + this.titular + ", com o numero da conta:" + this.numeroConta + " com o saldo de R$" + this.saldo);
    }
}


class Corrente extends ContaBanco {

    protected limiteChequeEspecial: number = 10000;

    constructor(limiteChequeEspecial: number) {
        super("1", 1000, "Matheus");
        this.limiteChequeEspecial = limiteChequeEspecial
    }

    saldoAtual() {
        return "Seu saldo atual é de R$" + this.saldo;
    }

    deposito(deposito: number) {
        this.saldo = this.saldo + deposito
        return "Você depositou R$" + deposito + " agora seu saldo atuali é de R$" + this.saldo;
    }

    saque(saque: number) {
        let limiteSaque = this.limiteChequeEspecial + this.saldo;
        if (saque > limiteSaque ) {
            return "Impossivel realizar o saque de R$"
                + saque + " pois seu limite é de R$" + this.limiteChequeEspecial
        } else {
            this.saldo = this.saldo - saque
            return "Você possuia R$" + (this.saldo + saque) + " em sua conta, você realizou um saque no valor de R$"
                + saque + ". " + " Seu saldo atual é de " + this.saldo
        } 
        
            

    }

    contaBancaria(): number {
        return 1
    }

}

class Poupanca extends ContaBanco{
    calcularRendimentoAnual: number = 12
    constructor( calcularRendimentoAnual: number) {
        super("2", 1000, "Welington");
        this.calcularRendimentoAnual = calcularRendimentoAnual
    }
    saldoAtual() {
        return "Seu saldo atual é de R$" + this.saldo;
    }

    deposito(deposito: number) {
        this.saldo = this.saldo + deposito
        return "Você depositou R$" + deposito + " agora seu saldo atuali é de R$" + this.saldo;
    }

    saque(saque: number){
        if(saque > this.saldo){
            return "Impossivel realizar o saque de R$"
            + saque+ " pois você tem apenas R$" + this.saldo
        } else{
            this.saldo = this.saldo - saque
        return "Você possuia R$"+(this.saldo+saque)+ " em sua conta, você realizou um saque no valor de R$"
        + saque +". " +" Seu saldo atual é de "+ this.saldo 
        
        }
        
    }
    RendimentoAnual(taxa:number) {
         return this.saldo * taxa + this.saldo
    }

    contaBancaria(): number {
        return 1
    }

    
}


const contaCorrente =  new Corrente(10000);
contaCorrente.apresentar();
console.log(contaCorrente.saldoAtual());
console.log(contaCorrente.deposito(500));
console.log(contaCorrente.saque(115100));
console.log(contaCorrente.deposito(500));

    const contaPoupanca =  new Poupanca(12);
//contaPoupanca.apresentar();
//console.log(contaPoupanca.saldoAtual());
//console.log(contaPoupanca.deposito(500));
//console.log(contaPoupanca.saque(2000));
//console.log(contaPoupanca.RendimentoAnual(0.12));