import DomControle from "./controleDOM.js";

document.addEventListener("DOMContentLoaded", () => {
    new DomControle().init();
})

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