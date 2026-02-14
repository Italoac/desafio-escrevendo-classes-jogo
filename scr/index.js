//Desafio para criar nome, idade e tipo
//Conforme o tipo da classe do heroi ele ataque com a habilidade especifica.

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch(this.tipo) {
      case "mago":
        ataque = "magia";
        break;
        
      case "guerreiro":
        ataque = "espada";
        break;
        
      case "monge":
        ataque = "artes marciais";
        break;
        
      case "ninja":
        ataque = "shuriken";
        break;
        
      default:
        ataque = "ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

let heroi1 = new Heroi("Arthas", 30, "guerreiro");
heroi1.atacar();

let heroi2 = new Heroi("Shiv", 25, "mago");
heroi2.atacar();

let heroi3 = new Heroi("Rox", 20, "monge");
heroi3.atacar();

let heroi4 = new Heroi("Camy", 18, "ninja");
heroi4.atacar();

let heroi5 = new Heroi("Orfeu", 1, "poder do heroi");
heroi5.atacar();
