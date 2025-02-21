"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor() {
        this.name = "";
        this.stock = 0;
    }
    buy(count) {
        if (count <= this.stock) {
            this.stock -= count;
            return true;
        }
        else {
            return false;
        }
    }
}
let peach = new Item();
peach.name = "もも";
peach.stock = 3;
console.log(peach.name);
console.log(peach.buy(3));
