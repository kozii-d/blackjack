import '../styles/style.scss';

import Player from './player';
import Game from './game'

const players = [new Player(0, 'Alice'), new Player(1, 'Joe'), new Player(2, 'Hugh')];
let game = new Game(players);

const hitBtn = document.querySelector('#hit');
const standBtn = document.querySelector('#stand');
const modalBtn = document.querySelector('.modal__btn');

const gameField = document.querySelector('.game-field');
const modal = document.querySelector('.modal');
const modalHeader = modal.querySelector('.modal__winner');

hitBtn.addEventListener('click', () => {
    game.hit(game.acitvePlayerId);
    renderPlayers();
});
standBtn.addEventListener('click', () => {
    game.stand(game.acitvePlayerId);
    renderPlayers();
});
modalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    players.forEach(player => {
        player.resertPlayer();
    })
    game = new Game(players);
    renderPlayers();
});

function renderPlayers() {
    gameField.innerHTML = ``;
    game.players.forEach(player => {
        gameField.appendChild(createPlayer(player));
    })
    checkEndGame(game);
}

function checkEndGame(gameObject) {
    if(gameObject.isEndGame) {
        modal.style.display = 'block';
        if (gameObject.winners.length === 0) {
            modalHeader.textContent = 'Nobody win!';
        }
        if (gameObject.winners.length === 1) {
            modalHeader.textContent = `${gameObject.winners[0].getPlayerName} win!`;
        }
        if (gameObject.winners.length > 1) {
            modalHeader.textContent = `Draw!`;
        }
    }

}

function createPlayer(playerObject) {
    const player = document.createElement('div');
    const playerInfo = document.createElement('div');
    const playerName = document.createElement('p');
    const playerScore = document.createElement('p');
    const cards = document.createElement('div');

    player.classList.add('player');
    player.classList.remove('player_active');
    if (game.acitvePlayerId === playerObject.getPlayerId){
        player.classList.add('player_active');
    }
    if (playerObject.isLose) {
        player.classList.add('player_lose');
    }
    playerInfo.classList.add('player__info');
    playerName.classList.add('player__name');
    playerScore.classList.add('player__score');
    cards.classList.add('cards');

    playerName.textContent = playerObject.getPlayerName;
    playerScore.textContent = playerObject.getPlayerScore;

    playerInfo.appendChild(playerName);
    playerInfo.appendChild(playerScore);
    player.appendChild(playerInfo);
    player.appendChild(cards);

    playerObject.cards.forEach(card => {
        cards.appendChild(createCard(card));
    });

    return player;
}

function createCard(cardObject) {
    const card = document.createElement('div');
    const cardInfo = document.createElement('div');
    const cardInfoBottom = document.createElement('div');
    const cardName = document.createElement('p');
    const cardSuit = document.createElement('p');
    const cardNameBottom = document.createElement('p');
    const cardSuitBottom = document.createElement('p');

    card.classList.add('card');
    cardInfo.classList.add('card__info');
    cardInfoBottom.classList.add('card__info_bottom');
    cardName.classList.add('card__name');
    cardSuit.classList.add('card__suit');
    cardNameBottom.classList.add('card__name');
    cardSuitBottom.classList.add('card__suit');

    if(cardObject.getCardSuit === '♥' || cardObject.getCardSuit === '♦') {
        cardInfo.style.color = 'red';
        cardInfoBottom.style.color = 'red';
    }

    cardName.textContent = cardObject.getCardName;
    cardSuit.textContent = cardObject.getCardSuit;
    cardNameBottom.textContent = cardObject.getCardName;
    cardSuitBottom.textContent = cardObject.getCardSuit;

    cardInfo.appendChild(cardName);
    cardInfo.appendChild(cardSuit);
    cardInfoBottom.appendChild(cardNameBottom);
    cardInfoBottom.appendChild(cardSuitBottom);
    card.appendChild(cardInfo);
    card.appendChild(cardInfoBottom);

    return card;
}

renderPlayers();
