class Pessoas{

    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if(imc < 18.5){
            return ('Abaixo do peso');
        } else if(imc >= 18.5 && imc < 25){
            return ('Peso normal');
        } else if(imc >= 25 && imc < 30){
            return ('Acima do peso');
        } else if (imc >= 30 && imc < 40){
            return ('Obeso');
        } else if (imc >= 40){
            return ('Obesi8dade grave');
        }
    }
}

const beno = new Pessoas('Beno', 65, 1.71)
console.log(beno.classificarImc())
console.log(beno)

const renan = new Pessoas('Renan', 63, 1.75)
console.log(renan.classificarImc())
console.log(renan)

