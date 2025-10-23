import Player from './player.js';


export default function selectPlayer(playerChoice) {
    let selectedPlayer;
    switch (playerChoice) {
        case "1": {
            return selectedPlayer = new Player({ name: "mario", velocidade: 4, manobrabilidade: 3, poder: 3, pontos: 0 });

        }
        case "2": {
            return selectedPlayer = new Player({ name: "luigi", velocidade: 3, manobrabilidade: 4, poder: 4, pontos: 0 });

        }
        case "3": {
            return selectedPlayer = new Player({ name: "peach", velocidade: 3, manobrabilidade: 4, poder: 2, pontos: 0 });

        }
        case "4": {
            return selectedPlayer = new Player({ name: "yoshi", velocidade: 2, manobrabilidade: 4, poder: 3, pontos: 0 });

        }
        case "5": {
            return selectedPlayer = new Player({ name: "bowser", velocidade: 5, manobrabilidade: 2, poder: 5, pontos: 0 });

        }
        case "6": {
            return selectedPlayer = new Player({ name: "kong", velocidade: 2, manobrabilidade: 2, poder: 5, pontos: 0 });

        }

        default: {
            return console.log("Chose a valid player");

        }
    }
}
