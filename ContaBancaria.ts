class ContaBancaria{
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number)
    {
        this.titular = titular;
        this.saldo = saldo;

    }
    saldoAtual(){
        return "Seu saldo atual é de R$" + this.saldo;
    }   
  
    deposito(deposito: number){
        this.saldo = this.saldo + deposito 
        return "Você depositou R$"+ deposito +" agora seu saldo atuali é de R$"+ this.saldo;
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
      
}

let minnhaConta = new ContaBancaria("João", 1000);
let minnhaConta2 = new ContaBancaria("Carlos", 1000);
let minnhaConta3 = new ContaBancaria("Marcelo", 1000);

console.log(minnhaConta.saldoAtual());
console.log(minnhaConta.deposito(500));
console.log(minnhaConta.saque(200));
console.log(minnhaConta.saque(2000));

console.log(minnhaConta2.saldoAtual());
console.log(minnhaConta2.deposito(500));
console.log(minnhaConta2.saque(200));
console.log(minnhaConta2.saque(2000));

console.log(minnhaConta3.saldoAtual());
console.log(minnhaConta3.deposito(500));
console.log(minnhaConta3.saque(200));
console.log(minnhaConta3.saque(2000));
