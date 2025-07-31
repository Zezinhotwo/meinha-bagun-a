import DomControle from "./controleDOM.js";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#restartGame").addEventListener("click", () => {
        new DomControle().restart()
    });
    new DomControle().init();
    new DomControle().DOM_bomb();
})