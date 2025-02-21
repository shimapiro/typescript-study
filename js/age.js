"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Gest extends Person {
}
class Member extends Person {
    constructor(name, birth) {
        super(name);
        this._birth = new Date();
        this.birth = birth;
    }
    get birth() {
        return this._birth;
    }
    set birth(value) {
        this._birth = value;
    }
}
const yoshiko = new Member("Yoshiko", new Date(2000, 1, 1));
console.log(yoshiko.name);
let taro = new Gest("taro");
console.log(taro.name);
