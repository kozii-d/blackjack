import Card from "./card";
import Player from "./player";

export default class Game {
    cardsDeck = [];
    players;

    #suits = ['♣', '♠', '♥', '♦'];
    #highCards = ['J', 'Q', 'K', 'A'];

    constructor(players = []) {
        this.players = players;
        this.createCardsDeck();
        this.firstHand();
    }

    createCardsDeck() {
        this.#suits.forEach((suit) => {
            for (let i = 2; i <= 10; i++) {
                this.cardsDeck.push(new Card(`${i}`, suit, i));
            }
            this.#highCards.forEach(card => {
                this.cardsDeck.push(new Card(`${card}`, suit, card === 'A' ? 11 : 10));

            })
        });

        this.cardsDeck = this.cardsDeck.sort(() => 0.5 - Math.random());
    }

    firstHand() {
        this.players.forEach(player => {
            player.cards.push(this.cardsDeck.shift());
            player.cards.push(this.cardsDeck.shift());
            player.setScore();
            player.checkWin();
        });
    }


}