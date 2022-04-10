import '../styles/style.scss';

import Card from './card';
import Player from './player';
import Game from './game'

console.log();

const game = new Game([new Player(0, 'Alice'), new Player(1, 'Joe')]);
