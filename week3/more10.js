'use strict';

let emptyObject = {};
console.log(typeof (emptyObject))

let teachers = [

    { firstName: 'Philipp', lastName: 'Beau' },
    { firstName: 'Unmesh', lastName: 'Joshi' },
    { firstName: 'Osman', lastName: 'Ungur' },
    { firstName: 'Hardit', lastName: 'Singh' },
    { firstName: 'Jim', lastName: 'Cramer' },
    { firstName: 'Rohan', lastName: 'Nicholls' },
];

teachers[0].languages = 'HTML and CSS';
teachers[1].languages = 'CLI and Git';
teachers[2].languages = 'CLI and Git';
teachers[3].languages = 'CLI and Git';
teachers[4].languages = 'javaScript';
teachers[5].languages = 'javaScript';

console.log(teachers);
