import { addAutomatic, quadros } from "./maquina.js";


export default class DomControle {

    cosntructor() {
        this.init();
    }
    init() {
        this.put_ship();
    }

    addBorad(player) {
        const tabu = document.querySelector(".tabu");
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const div = document.createElement("div");
                if (player[i][j] !== 0) {
                    div.dataset.point = player[i][j];
                    div.style.background = "red"
                }
                tabu.append(div);
            }
        }


    }

    put_ship() {


        const player1 = {
            tabuleiro: quadros(),
            navios: [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
        };

        const player2 = {
            tabuleiro: quadros(),
            navios: [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
        };

        new addAutomatic(player1.tabuleiro, [...player1.navios]);
        new addAutomatic(player2.tabuleiro, [...player2.navios]);

        this.addBorad([...player1.tabuleiro]);

    }

}