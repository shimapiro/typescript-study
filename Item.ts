export const tax: number = 1.1;
export abstract class Item {
  price: number = 0;
  name: string = "";
  abstract getTaxPrice(): number;
}
