class Evento {
    nome: string;
    dia: string;
    horario: string;

    constructor(nome: string, dia: string, horario: string) {
        this.nome = nome;
        this.dia = dia;
        this.horario = horario;

    }

}
class Agenda {
    private eventos: Evento[] = [];


    constructor() {

    }
    adicionarEventos(evento: Evento) {
        this.eventos.push(evento);
    }

    listarEventos() {
        console.log("Meu(s) evento(s) ");
        for(let i=0; i<this.eventos.length; i++){
        console.log(this.eventos[i].nome +" no dia "+this.eventos[i].dia+" às "+this.eventos[i].horario);
    }
    }
    apagar() {
        this.eventos.splice(0, 1);
        return 'seu evento foi apagado'

    }
}
const evento1 = new Evento("casamento","10","20h");
const evento2 = new Evento("musical","04","22h");
const evento3 = new Evento("encontro","01","23h");
const meusEventos = new Agenda();
meusEventos.adicionarEventos(evento1);
meusEventos.adicionarEventos(evento2);
meusEventos.adicionarEventos(evento3);
console.log(meusEventos.listarEventos());
console.log(meusEventos.apagar());
console.log(meusEventos.listarEventos());