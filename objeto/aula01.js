class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

const beno = new Pessoa();
beno.nome = 'Beno Santos'
beno.idade = 22

const kleber = new Pessoa();
kleber.nome = 'Kleber'
kleber.idade = 26

beno.descrever();
kleber.descrever();