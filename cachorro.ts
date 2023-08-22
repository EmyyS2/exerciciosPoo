class Cachorro{
    nome: string;
    raca: string;
    idade: number;
    

    constructor(nome:string, raca:string, idade:number){
        this.nome=nome;
        this.raca=raca;
        this.idade=idade;
    }


    apresentar(){
        return "Oi, eu sou " + this.nome +   " um " + this.raca + " de " + this.idade + " anos";
    }

    apresentarPara(humano:string){
        return "Olá "+humano+ ", eu sou " + this.nome +   " um " + this.raca + " de " + this.idade + " anos";
    }
}

let Apolo = new Cachorro("Apolo", "Pitbull", 1);
let Nikita = new Cachorro("Nikita", 'Pitbull com Boxer', 2);

console.log(Apolo.nome);
console.log(Nikita.nome);
console.log(Apolo.apresentar());
console.log(Nikita.apresentar());
console.log(Apolo.apresentarPara("Emy"))