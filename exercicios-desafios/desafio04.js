let peso = 65;
let altura = 1.70;

let imc = peso /Math.pow(altura,2); /*(altura * altura);*/
console.log(imc.toFixed(2));

if(imc < 18.5){
    console.log('Abaixo do peso');
} else if(imc >= 18.5 && imc < 25){
    console.log('Peso normal');
} else if(imc >= 25 && imc < 30){
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40){
    console.log('Obeso');
} else if (imc >= 40){
    console.log('Obesi8dade grave');
}