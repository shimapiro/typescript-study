abstract class Item {
  name: string = "";
  price: number = 0;
  abstract getTaxPrice(): number;
}

class Food extends Item {
  getTaxPrice(): number {
    return this.price * 1.08;
  }
}

class stationary extends Item {
  getTaxPrice(): number {
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
