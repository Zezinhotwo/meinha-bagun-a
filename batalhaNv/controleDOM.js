import { addAutomatic, quadros } from "./maquina.js";


export default class DomControle {

    cosntructor() {
        this.init();
    }

    init() {
        this.put_ship();
    }

    put_ship() {
        const player1 = {
            name: "player",
            tabuleiro: quadros(),
            navios: [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
        };

        const player2 = {
            name: "computer",
            tabuleiro: quadros(),
            navios: [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
        };

        new addAutomatic(player1.tabuleiro, [...player1.navios]);
        new addAutomatic(player2.tabuleiro, [...player2.navios]);

        this.DOM_addBorad(player1.name, [...player1.tabuleiro]);
        this.DOM_addBorad(player2.name, [...player2.tabuleiro]);

    }

    restart() {
        const tabu = document.querySelector(".tabu");
        tabu.innerText = ""
        this.put_ship()
    }
    DOM_bomb() {
        let point = 0;
        document.querySelector(".macquina")
            .addEventListener("click", (event) => {
                const target = event.target;
                if (point == 20) {
                    alert("VOCE GANHOU !")
                    this.restart()
                }
                if (target.classList.contains("ponto")) {
                    target.style.background = "black"
                    if (target.classList.contains("ship")) {
                        target.style.background = "orange"
                        point += 1
                    }
                }

            });

    }

    DOM_addBorad(name, player) {
        const tabu = document.querySelector(".tabu");
        const board = document.createElement("div");
        const nickname = document.createElement("div");
        nickname.innerText = name;
        board.classList.add("quadro");
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const div = document.createElement("div");
                div.classList.add("ponto");
                if (player[i][j] !== 0 && name !== "computer") {
                    // div.innerText = player[i][j];
                    div.style.background = "red";
                    board.classList.add("player")
                    // div.dataset.point = player[i][j];
                }
                if (player[i][j] !== 0 && name === "computer") [
                    div.classList.add("ship")
                    ,
                    board.classList.add("macquina") // to add bomb event
                ]
                board.append(div);
            }
        }
        tabu.append(nickname)
        tabu.append(board)
    }

}