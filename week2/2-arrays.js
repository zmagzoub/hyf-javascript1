'use strict';

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, 'meerkat')
console.log("The new value of the array is: '[blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']");
console.log(favoriteAnimals);
console.log('The array has a length of:' + favoriteAnimals.length);

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

console.log('meerkat is at index: ' + favoriteAnimals.indexOf('meerkat'));
favoriteAnimals.splice(1, 1);
console.log(favoriteAnimals);
