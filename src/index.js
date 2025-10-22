import promptSync from 'prompt-sync';
import Player from './player.js';

const prompt = promptSync();

let selectedPlayer;

const mensagemPrompt = `Selecione o player (1 a 6):
1 = Mario
2 = Luigi
3 = Peach
4 = Yoshi
5 = Bowser
6 = Kong
`;

console.log(mensagemPrompt);

const playerChoice = prompt('');


switch (playerChoice) {
    case "1": {
        selectedPlayer = new Player({ name: "mario", velocidade: 4, manobrabilidade: 3, poder: 3, pontos: 0 });
        break;
    }
    case "2": {
        selectedPlayer = new Player({ name: "luigi", velocidade: 3, manobrabilidade: 4, poder: 4, pontos: 0 });
        break;
    }
    case "3": {
        selectedPlayer = new Player({ name: "peach", velocidade: 3, manobrabilidade: 4, poder: 2, pontos: 0 });
        break;
    }
    case "4": {
        selectedPlayer = new Player({ name: "yoshi", velocidade: 2, manobrabilidade: 4, poder: 3, pontos: 0 });
        break;
    }
    case "5": {
        selectedPlayer = new Player({ name: "bowser", velocidade: 5, manobrabilidade: 2, poder: 5, pontos: 0 });
        break;
    }
    case "6": {
        selectedPlayer = new Player({ name: "kong", velocidade: 2, manobrabilidade: 2, poder: 5, pontos: 0 });
        break;
    }

    default: {
        console.log("Chose a valid player")
        break;
    }
}

if (selectedPlayer) {
    console.log(`Jogador selecionado: ${selectedPlayer.name}`);
    console.log(selectedPlayer);
}