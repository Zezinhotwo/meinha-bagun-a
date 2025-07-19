
function quadros() {
    return Array.from({ length: 5 }, () => Array(5).fill(0));
}

function addShips(tabuleiro, embarcacoes, x, y, p) {
    if (embarcacoes.length === 0) return;

    const tamanho = embarcacoes.shift();

    if (p.toLowerCase() === "v") {
        if (x + tamanho <= tabuleiro.length) {
            for (let i = 0; i < tamanho; i++) {
                if (tabuleiro[x + i][y] !== 0) {
                    console.log("este ponto nao pode ser ocupado")
                    console.log(`tamanho da embarcacao ${tamanho} coodenadas x[${x}]y[${y}]`)
                    return;
                }
            } for (let i = 0; i < tamanho; i++) {
                tabuleiro[x + i][y] = tamanho;
            }
        }
    } else if (p.toLowerCase() === "h") {
        if (y + tamanho <= tabuleiro.length) {
            for (let i = 0; i < tamanho; i++) {
                if (tabuleiro[x][y+i] !== 0) {
                    console.log("este ponto nao pode ser ocupado")
                    console.log(`tamanho da embarcacao ${tamanho} coodenadas x[${x}]y[${y}]`)
                    return;
                }
            }
            for (let i = 0; i < tamanho; i++) {
                tabuleiro[x][y + i] = tamanho;
            }
        }
    }
}


// 🧑 Player 1
const player1 = {
    tabuleiro: quadros(),
    navios: [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
};

// 🤖 Player 2 (ex: máquina)
const player2 = {
    tabuleiro: quadros(),
    navios: [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
};

// Posiciona os navios
addShips(player1.tabuleiro, player1.navios, 0, 0, "v");
addShips(player1.tabuleiro, player1.navios, 0, 2, "h");

addShips(player2.tabuleiro, player2.navios, 1, 1, "v");
addShips(player2.tabuleiro, player2.navios, 3, 0, "h");

// Resultado
console.log("Player 1:");
console.table(player1.tabuleiro);

console.log("Player 2:");
console.table(player2.tabuleiro);