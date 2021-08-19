console.log(`Trabalhando com condicionais \n \n`);
const idadeComprador = 15;
const acompanhado = true;
let destino = `Fortaleza`;

const listaDeDestinos = new Array(
    `Salvador`,
    `Fortaleza`,
    `Rio de janeiro`,
);

// console.log("Destinos possíveis");
// console.log(listaDeDestinos);

// if (idadeComprador >= 18 || acompanhado) {
//     console.log(`Boa viagem!!`);
//     listaDeDestinos.splice(1, 1);
// }
// else {
//     console.log(`comprador menor de idade e não acompanhado.`)
// }

let contador = 0;
let destinoExiste = false;
while(contador < 3) {
    if(listaDeDestinos[contador] == destino){
        console.log(`Destino existe.`);
        destinoExiste = true;
        break;
    }
    else {
        console.log(`Destino não existe.`);
    }
    contador++;
}