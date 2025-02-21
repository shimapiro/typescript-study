class Item {
  name: string = "";
  stock: number = 0;

  buy(count: number): boolean {
    if (count <= this.stock) {
      this.stock -= count;
      return true;
    } else {
      return false;
    }
  }
}

let peach: Item = new Item();
peach.name = "もも";
peach.stock = 3;

console.log(peach.name);
console.log(peach.buy(3));
