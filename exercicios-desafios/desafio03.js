let notaUm = 7;
let notaDois = 7;
let notaTres = 8;

let media = (notaUm + notaDois + notaTres) / 3;
console.log(media.toFixed(2))

if(media < 5){
    console.log('Reprovado!')
} else if (media > 7 ){
    console.log('Aprovado!')
} else{
    console.log('Recuperação')
}