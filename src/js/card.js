export default class Card {
    #name = null;
    #suit = null;
    #weight = null;
    constructor(name, suit, weight) {
        this.#name = name;
        this.#suit = suit;
        this.#weight = weight
    }

    get getCardName() {
        return this.#name;
    }
    get getCardSuit() {
        return this.#suit;
    }
    get getCardWeight() {
        return this.#weight;
    }
}