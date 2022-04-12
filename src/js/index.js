import '../styles/style.scss';

import Player from './player';
import Game from './game'

const game = new Game([new Player(0, 'Alice'), new Player(1, 'Joe'), new Player(2, 'Hue')]);

const hitBtn = document.querySelector('#hit');
const standBtn = document.querySelector('#stand');

hitBtn.addEventListener('click', () => {
    game.hit(game.acitvePlayerId);
    renderPlayers();
    // console.log(game);
});
standBtn.addEventListener('click', () => {
    game.stand(game.acitvePlayerId);
    renderPlayers();
    // console.log(game);
});

const gameField = document.querySelector('.game-field');

function renderPlayers() {
    gameField.innerHTML = ``;
    game.players.forEach(player => {
        gameField.appendChild(createPlayer(player));
    })
}
renderPlayers();


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
// console.log(createPlayer(game.players[0]));

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




// game.stand(game.acitvePlayerId);
// game.stand(game.acitvePlayerId);
// game.stand(game.acitvePlayerId);
console.log(game);

