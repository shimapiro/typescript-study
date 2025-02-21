"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor() {
        this.name = "";
        this.price = 0;
    }
}
class Food extends Item {
    getTaxPrice() {
        return this.price * 1.08;
    }
}
class stationary extends Item {
    getTaxPrice() {
        return this.price * 1.08;
    }
}
const peach = new Food();
peach.name = "もも";
console.log(peach.name);
const pencil = new stationary();
pencil.name = "ぺん";
pencil.price = 80;
console.log(pencil.name);
console.log(pencil.price);
console.log(pencil.getTaxPrice());
