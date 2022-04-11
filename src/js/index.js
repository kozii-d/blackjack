import '../styles/style.scss';

import Player from './player';
import Game from './game'

const game = new Game([new Player(0, 'Alice'), new Player(1, 'Joe'), new Player(2, 'Hue')]);

const hitBtn = document.querySelector('#hit');
const standBtn = document.querySelector('#stand');

hitBtn.addEventListener('click', () => {
    game.hit(game.acitvePlayerId);
    console.log(game);
});
standBtn.addEventListener('click', () => {
    game.stand(game.acitvePlayerId);
    console.log(game);
});


// game.stand(game.acitvePlayerId);
// game.stand(game.acitvePlayerId);
// game.stand(game.acitvePlayerId);
console.log(game);

