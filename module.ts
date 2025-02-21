import { Item,tax } from "./Item.js";

class Food extends Item {
  getTaxPrice(): number {
    return this.price * 1.08;
  }
}

const peach = new Food();
peach.price = 150;
console.log(peach.getTaxPrice());
