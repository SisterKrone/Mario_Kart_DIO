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

async function logRollResult(playerName, block, diceResult, attribute) {
    console.log(`${playerName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}
    `)
}

async function declareWinner(player1, player2) {
    console.log("Resultado final:")
    console.log(`${player1.name}: ${player1.pontos} pontos(s)`)
    console.log(`${player2.name}: ${player2.pontos} pontos(s)`)

    if (player1.pontos > player2.pontos) {
        console.log(`\n ${player1.name} venceu a corrida! 🏆`)
    } else if (player2.pontos > player1.pontos) {
        console.log(`\n ${player2.name} venceu a corrida! 🏆`)
    }
    else{
        console.log(`A corrida terminou empatada!!! 🤠`)
    }
}

async function playerRaceEngine(player1, player2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);


        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0
        let totalTestSkill2 = 0

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + player1.velocidade
            totalTestSkill2 = diceResult2 + player2.velocidade

            await logRollResult(player1.name, "velocidade", diceResult1, player1.velocidade)
            await logRollResult(player2.name, "velocidade", diceResult2, player2.velocidade)

        }
        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + player1.manobrabilidade
            totalTestSkill2 = diceResult2 + player2.manobrabilidade

            await logRollResult(player1.name, "manobrabilidade", diceResult1, player1.manobrabilidade)
            await logRollResult(player2.name, "manobrabilidade", diceResult2, player2.manobrabilidade)
        }
        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + player1.poder
            let powerResult2 = diceResult2 + player2.poder

            console.log(`${player1.name} confrontou ${player2.name}! 🥊`)
            await logRollResult(player1.name, "poder", diceResult1, player1.poder)
            await logRollResult(player2.name, "poder", diceResult2, player2.poder)

            if (powerResult1 > powerResult2 && player2.pontos > 0) {
                console.log(`${player1.name} venceu o confronto! ${player2.name} perdeu 1 ponto 🐢`)
                player2.pontos--
            }

            if (powerResult2 > powerResult1 && player1.pontos > 0) {
                console.log(`${player2.name} venceu o confronto! ${player1.name} perdeu 1 ponto 🐢`)
                player1.pontos--
            }

            if (powerResult1 === powerResult2) {
                console.log("O confronto empatou! Nenhum jogador perdeu pontos")
            }


        }

        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${player1.name} marcou um ponto!`)
            player1.pontos++
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${player2.name} marcou um ponto!`)
            player2.pontos++
        }

        console.log("__________________________________________________________________")
    }

}


export default { playerRaceEngine, declareWinner };