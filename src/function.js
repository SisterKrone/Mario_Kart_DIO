async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result

    switch (true) {
        case random < 0.33:
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

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0
    let totalTestSkill2 = 0

    if (block === "RETA") {
        totalTestSkill1 = diceResult1 + player1.velocidade
        totalTestSkill2 = diceResult2 + player2.velocidade
    }
    if (block === "CURVA") {
        totalTestSkill1 = diceResult1 + player1.manobrabilidade
        totalTestSkill2 = diceResult2 + player2.manobrabilidade
    }
    if (block === "CONFRONTO") { }

}


export default { playerRaceEngine, rollDice };