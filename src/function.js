async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result

    switch (true) {
        case random <0.33:
            return result = "RETA";
            
        case random < 0.66:
            return result = "CURVA"

        default:
            return result = "CONFRONTO"
    }
}

async function playerRaceEngine(player1, player2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
    }
}


export default { playerRaceEngine , rollDice };