const tabu = document.querySelector(".tabu");

for(let i = 0 ; i < 100; i++){

    const indice = document.createElement("div");
    indice.classList.add("ponto");
    indice.id = i;
    tabu.append(indice)
}

tabu.addEventListener("click",(event)=>{
    const click=event.target
    if(click.classList.contains("ponto")){
        click.style.background ="red"
    }
    console.log(event.target)
})


// const board = () => {
//     const quadros = Array.from({ length: 5 }, () => Array(5).fill(0));
//     const embarcacoes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
//     const vh = [];
//     const pont = [];

//     const colocarBarco = ([barco, ...resto]) => {
//         if (!barco) return;

//         vh.push(prompt(`Embarcação de tamanho ${barco}: V (vertical) ou H (horizontal)?`));
//         pont.push(prompt(`Coordenadas X,Y para embarcação de tamanho ${barco}`));

//         return colocarBarco(resto);
//     };

//     const add = () => {
//         vh.forEach((orientacao, i) => {
//             const [x, y] = pont[i].split(",").map(Number);
//             const tamanho = embarcacoes[i];

//             if (orientacao.toLowerCase() === "v") {
//                 for (let j = 0; j < tamanho; j++) {
//                     if (x + j < 5) {
//                         quadros[x + j][y] = tamanho;
//                     }
//                 }
//             } else if (orientacao.toLowerCase() === "h") {
//                 for (let j = 0; j < tamanho; j++) {
//                     if (y + j < 5) {
//                         quadros[x][y + j] = tamanho;
//                     }
//                 }
//             }
//         });
//     };

//     colocarBarco(embarcacoes);
//     add();

//     return { quadros, vh, pont };
// };

// const resultado = board();
// console.table(resultado.quadros);