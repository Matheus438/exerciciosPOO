const pessoa = new class {
    private primeiroNome = "José";
    private ultimoNome = "da Silva";
    gerNomeCompleto(){
        return this.primeiroNome + " " + this.ultimoNome;
    }
}

console.log(pessoa.gerNomeCompleto());

const pessoa10 = {
     primeiroNome : "José",
     ultimoNome : "da Silva",
    gerNomeCompleto: function(){
        return this.primeiroNome + " " + this.ultimoNome;
    }
}

console.log(pessoa10.gerNomeCompleto());

const treinadorPessoal = new class{
    private rotina: {nome: string, duracao: number}[] = [];
    adicionarExercicios(nome:string, duracao: number): void {
        this.rotina.push({nome, duracao});
    }
    calcularTempoTotal():number{//soma do tempo dos exercicios
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
         //this.rotina.forEach(item => soma = soma+ item.duracao);//os dois fazem a mesma coisa
        return soma;
    }
}
treinadorPessoal.adicionarExercicios("Corrida", 30);
treinadorPessoal.adicionarExercicios("flexões", 15);
treinadorPessoal.adicionarExercicios("agachamento", 20);
console.log("Tempo total necessário para a rotina: " + treinadorPessoal.calcularTempoTotal()+ " em minutos")