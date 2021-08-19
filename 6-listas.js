console.log(`Trabalhando com listas`);

    // const salvador = `SAlvador`;
    // const fortaleza = `Fortaleza`;
    // const rioDeJaneiro = `Rio de Janeiro`;


const listaDeDestinos = new Array(
    `SAlvador`, 
    `Fortaleza`, 
    `Rio de janeiro`,
);

listaDeDestinos.push(`Curitiba`); // adiciona um item à lista.

console.log("Destinos possíveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);
