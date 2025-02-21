"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_js_1 = require("./Item.js");
class Food extends Item_js_1.Item {
    getTaxPrice() {
        return this.price * 1.08;
    }
}
const peach = new Food();
peach.price = 150;
console.log(peach.getTaxPrice());
