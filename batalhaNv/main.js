import DomControle from "./controleDOM.js";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#startGame").addEventListener("click", () => {
            new DomControle().init();
    });

})