function caucularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if(imc < 18.5){
        return 'Abaixo do peso';
    } else if(imc >= 18.5 && imc < 25){
        return 'Peso normal';
    } else if(imc >= 25 && imc < 30){
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40){
        return 'Obeso';
    } else if (imc >= 40){
        return 'Obesi8dade grave';
    }
}

function main(){
    let peso = 65
    let altura = 1.70;
    let imc = caucularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();


