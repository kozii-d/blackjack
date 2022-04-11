import Card from "./card";

export default class Player {
    #id = null;
    #score = 0;
    #name = null;
    cards = [];
    // isWinner = false;
    isLose = false;
    isStand = false;

    constructor(id, name) {
        this.#id = id;
        this.#name = name;
        this.updatePlayer();
    }

    updatePlayer() {
        this.setScore();
        this.checkWin();
    }

    checkWin() {
        if (this.#score === 21) {
            // this.isWinner = true;
            this.isStand = true;
        }
        if (this.#score > 21) {
            this.isLose = true;
            this.isStand = true;
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
    get getPlayerId() {
        return this.#id;
    }

}