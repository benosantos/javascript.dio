let precoGasolina = 5.63;
let precoEtanol = 3.64;
let kmPorLitros = 12;
let distanciaEmKm = 100;
let tipoDeCombustivel = precoGasolina;

let litrosComsumidos = distanciaEmKm / kmPorLitros;

if(tipoDeCombustivel === precoEtanol){
    let valorGasto = precoGasolina * litrosComsumidos;
    console.log(valorGasto.toFixed(2))
} else{
    let valorGasto = precoEtanol * litrosComsumidos;
    console.log(valorGasto.toFixed(2))
}


/*
let precoGasolina = 5.63;
let precoEtanol = 3.64;
let kmPorLitros = 12;
let distanciaEmKm = 100;
let tipoDeCombustivel = precoGasolina;

let litrosComsumidosGasolina = distanciaEmKm / kmPorLitros;
let litrosComsumidosEtanol = distanciaEmKm / kmPorLitros;

let valorGastoGasolina = precoGasolina * litrosComsumidosGasolina;
let valorGastoEtanol = precoEtanol * litrosComsumidosEtanol;

if (tipoDeCombustivel === precoGasolina){
    console.log(valorGastoGasolina.toFixed(2));
} else{
    console.log(valorGastoEtanol.toFixed(2));
}
*/