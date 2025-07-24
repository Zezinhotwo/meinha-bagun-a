import { addAutomatic, quadros } from "./maquina.js";


export default class DomControle {

    cosntructor() {
        this.init();
    }
    init() {
        this.put_ship();
    }

    DOMaddBorad(name, player) {
        const tabu = document.querySelector(".tabu");
        const board = document.createElement("div");
        const nickname = document.createElement("div");
        nickname.innerText = name;
        board.classList.add("quadro")
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const div = document.createElement("div");
                div.classList.add("ponto")
                if (player[i][j] !== 0 && name !== "computer") {
                    // div.innerText = player[i][j];
                    div.style.background = "red"
                    // div.dataset.point = player[i][j];
                }
                board.append(div);
            }
        }
        tabu.append(nickname)
        tabu.append(board)
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

        this.DOMaddBorad(player1.name, [...player1.tabuleiro]);
        this.DOMaddBorad(player2.name, [...player2.tabuleiro]);

    }

}