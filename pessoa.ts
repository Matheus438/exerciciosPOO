class Pessoa{
    nome: string;
    idade: number;
    comidas: string[];

    constructor(nome: string, idade: number, comidas: string[]){
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;
    }

    cumprimentar(){
    let msgHabilitacao = "Já posso tirar minha CNH";
    if(this.idade < 18)
    {
        msgHabilitacao = "Não posso tirar minha CNH"; 
    }
        return "Olá meu nome é "+this.nome+" e tenho "+this.idade + " anos " + msgHabilitacao + " .";
    }
}

let pessoa1 = new Pessoa("João", 17, ["doguinho", "macarrão", ]);
console.log(pessoa1.cumprimentar());