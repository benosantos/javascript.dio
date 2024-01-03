const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 2354;

const litrosComsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = precoCombustivel * litrosComsumidos;

console.log(valorGasto.toFixed(2));