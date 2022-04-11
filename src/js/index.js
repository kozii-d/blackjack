import '../styles/style.scss';

import Player from './player';
import Game from './game'

const game = new Game([new Player(0, 'Alice'), new Player(1, 'Joe'), new Player(2, 'Hue')]);

// game.hit(0)
game.stand(game.acitvePlayerId);
game.stand(game.acitvePlayerId);
game.stand(game.acitvePlayerId);
console.log(game);

