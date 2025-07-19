// const tabu = document.querySelector(".tabu");

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         const indice = document.createElement("div");

//         indice.classList.add("ponto");

//         indice.dataset.matrs = [i, j];
//         //   indice.dataset.j = j;

//         indice.textContent = `[${i},${j}]`;

//         tabu.append(indice);
//     }
// }
// tabu.addEventListener("click", (event) => {
//     const click = event.target
//     if (click.classList.contains("ponto")) {
//         click.style.background = "red"
//         board(click.dataset.matrs)
//     }
//     console.log(event.target)
// })

const board = (pnt) => {
    const quadros = Array.from({ length: 10 }, () => Array(10).fill(0));
    const embarcacoes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    const vh = [];
    const pont = [];

    const colocarBarco = ([barco, ...resto]) => {
        if (!barco) return;

        // vh.push(prompt(`Embarcação de tamanho ${barco}: V (vertical) ou H (horizontal)?`));
        pont.push([init],[fim]);

        return colocarBarco(resto);
    };

    const add = () => {
        vh.forEach((orientacao, i) => {
            const [x, y] = pont[i].split(",").map(Number);
            const tamanho = embarcacoes[i];

            if (orientacao.toLowerCase() === "v") {
                for (let j = 0; j < tamanho; j++) {
                    if (x + j < 10) {
                        quadros[x + j][y] = tamanho;
                    }else{
                        throw Error("nao e embarcaçao nao cabe")
                    }
                }
            } else if (orientacao.toLowerCase() === "h") {
                for (let j = 0; j < tamanho; j++) {
                    if (y + j < 10) {
                        quadros[x][y + j] = tamanho;
                    }else{
                        throw Error("nao e embarcaçao nao cabe")
                    }
                }
            }
        });
    };

    colocarBarco(embarcacoes);
    add();

    return { quadros, vh, pont };
};

const resultado = board();
console.table(resultado.quadros);