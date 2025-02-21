abstract class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Gest extends Person {}

class Member extends Person {
  private _birth: Date = new Date();

  constructor(name: string, birth: Date) {
    super(name);
    this.birth = birth;
  }

  get birth(): Date {
    return this._birth;
  }

  set birth(value: Date) {
    this._birth = value;
  }
}

const yoshiko = new Member("Yoshiko", new Date(2000, 1, 1));
console.log(yoshiko.name);

let taro: Gest = new Gest("taro");
console.log(taro.name);
