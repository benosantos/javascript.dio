class Carros{

    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm * 5.63;
    }

    descrever() {
        console.log(`O valor gasto no percurso foi de ${this.gastoMedioPorKm}`)
    }
}

const uno = new Carros('Fiat', 'Branco', 2 )

uno.descrever()