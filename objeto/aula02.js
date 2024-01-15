class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

const beno = new Pessoa('Beno', 22);
const kleber = new Pessoa('Kleber', 26);

console.log(beno)
console.log(kleber)