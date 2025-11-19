import promptSync from 'prompt-sync';
import selectPlayer from './playerChoice.js';
import funcs from './function.js';

const { playerRaceEngine, declareWinner } = funcs;

const prompt = promptSync();

const mensagemPrompt = `Selecione o player (1 a 6):
1 = Mario
2 = Luigi
3 = Peach
4 = Yoshi
5 = Bowser
6 = Kong
`;

console.log(mensagemPrompt);
const player1Choice = prompt('');
const player1 = selectPlayer(player1Choice);

console.log(mensagemPrompt);
const player2Choice = prompt('');
const player2 = selectPlayer(player2Choice);


if (player1 && player2) {
    console.log(`Jogadores selecionados: ${player1.name} e ${player2.name}`);
    //console.log(player1, player2);
    (async function main() {
        console.log(
            `🤠🚗 Corrida entre ${player1.name} e ${player2.name} começando...\n`
        );
        await playerRaceEngine(player1, player2);
        await declareWinner(player1, player2);

    })();
}

