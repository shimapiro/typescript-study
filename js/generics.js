"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomChar(...chars) {
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
}
console.log(getRandomChar("a", "b"));
