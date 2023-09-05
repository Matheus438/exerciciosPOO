class Evento{
    nome:string;
    data:string;
    horario:string;

    constructor(nome:string, data:string, horario:string){
        this.nome = nome;
        this.data = data;
        this.horario = horario
    }
}

class agenda{
    eventos: Evento [] = [];

    constructor(){

    }

    adicionarEvento(evento:Evento){
        this.eventos.push(evento);
    }

    visualizarEvento(){
        console.log("Os eventos da minha agenda são")
        for(let i=0; i< this.eventos.length; i++ ){
            console.log(this.eventos[i].nome + "na data" + this.eventos[i].data + this.eventos[i].horario);   }    
   
}
    removerEvento(evento: Evento){
        this.eventos = this.eventos.filter((item)=> item.nome !== evento.nome)
    }
}

const evento1 = new Evento("Aniversário","25/04", "19hrs");
const evento2 = new Evento("Acampamento Crisma","15/09", "18hrs");
const evento3 = new Evento("Festa das nações","08/09", "20hrs");

const minhaAgenda = new agenda();
minhaAgenda.adicionarEvento(evento1);
minhaAgenda.adicionarEvento(evento2);
minhaAgenda.adicionarEvento(evento3);
console.log(minhaAgenda.visualizarEvento());
console.log(minhaAgenda.removerEvento(evento1));
console.log(minhaAgenda.visualizarEvento());