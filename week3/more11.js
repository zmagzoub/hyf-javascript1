'use strict';

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

console.log(x == y);
console.log(x === y);
console.log(z === y);
console.log(z === x);
