export function quadros() {
    return Array.from({ length: 10 }, () => Array(10).fill(0));
}

function addShips(tabuleiro, tamanho, x, y, p) {
    if (!tamanho) return;

    if (p.toLowerCase() === "v") {
        if (x + tamanho <= tabuleiro.length) {
            for (let i = 0; i < tamanho; i++) {
                if (tabuleiro[x + i][y] !== 0) return;
            }
            for (let i = 0; i < tamanho; i++) {
                tabuleiro[x + i][y] = tamanho;
            }
        }
    } else if (p.toLowerCase() === "h") {
        if (y + tamanho <= tabuleiro.length) {
            for (let i = 0; i < tamanho; i++) {
                if (tabuleiro[x][y + i] !== 0) return;
            }
            for (let i = 0; i < tamanho; i++) {
                tabuleiro[x][y + i] = tamanho;
            }
        }
    }
}

export  function addAutomatic(tabuleiro, embarcacoes) {
    for (let i = 0; i < embarcacoes.length; i++) {
        let colocado = false;
        let tentativas = 0;

        while (!colocado && tentativas < 100) {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            const orientacao = Math.random() < 0.5 ? "v" : "h";

            // Tenta copiar tabuleiro antes e depois para testar se foi colocado
            const clone = JSON.stringify(tabuleiro);

            addShips(tabuleiro, embarcacoes[i], x, y, orientacao);

            if (JSON.stringify(tabuleiro) !== clone) {
                colocado = true;
            }

            tentativas++;
        }
    }
}

const player1 = {
    tabuleiro: quadros(),
    navios: [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
};

const player2 = {
    tabuleiro: quadros(),
    navios: [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
};

addAutomatic(player1.tabuleiro, [...player1.navios]); 
addAutomatic(player2.tabuleiro, [...player2.navios]);

console.log("Player 1:");
console.table(player1.tabuleiro);

console.log("Player 2:");
console.table(player2.tabuleiro);