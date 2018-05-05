'use strict';

function printObject(obj) {
    for (let property in obj) {
        console.log(property + ' = ' + obj[property]);
    }
}
const person = {
    firstName: 'Zaed',
    lastName: 'Magzoub',
    city: 'Delft'
};

printObject(person);
