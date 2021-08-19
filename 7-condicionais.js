console.log(`Trabalhando com condicionais`);
const idadeComprador = 15;
const acompanhado = true;

const listaDeDestinos = new Array(
    `Salvador`,
    `Fortaleza`,
    `Rio de janeiro`,
);

console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || acompanhado) {
    console.log(`Boa viagem!!`);
    listaDeDestinos.splice(1, 1);
}
else {
    console.log(`comprador menor de idade e não acompanhado.`)
}

// if (idadeComprador >= 18) {
//     console.log(`Comprador maior de idade.`);
//     listaDeDestinos.splice(1, 1);
// }
// else if (acompanhado) {
//     console.log(`Esta acompanhado, pode comprar.`);
//     listaDeDestinos.splice(1, 1);
// }
// else {
//     console.log(`comprador menor de idade. Não posso vender.`)
// }



// if(idadeComprador >= 18) {
//     console.log(`Comprador maior de idade.`);
//     listaDeDestinos.splice(1, 1);
//     } 
// else { 
//     if(acompanhado) {
//         console.log(`Esta acompanhado, pode comprar.`);
//         listaDeDestinos.splice(1, 1);
//     }
//     else{
//     console.log(`comprador menor de idade. Não posso vender.`)
//     }
// }

console.log(listaDeDestinos);