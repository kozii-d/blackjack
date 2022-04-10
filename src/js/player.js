import Card from "./card";

export default class Player {
    #id = 0;
    #score = 0;
    #name = null;
    cards = [];
    isWinner = false;

    constructor(id, name) {
        this.#id = id;
        this.#name = name;
        this.setScore();
        this.checkWin();
    }

    checkWin() {
        if (this.#score === 21) {
            this.isWinner = true;
        }
    }

    setScore() {
       this.#score = this.cards.reduce((accumulator, currentValue) => {
           return accumulator + currentValue.getCardWeight;
       }, 0)
    }

    get getPlayerScore() {
        return this.#score;
    }

    get getPlayerName() {
        return this.#name;
    }

}