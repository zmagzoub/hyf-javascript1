'use strict';

const vehicles = ['motorbike', 'caravan', 'bike', 'car'];

function vehicleType(color, code, age) {
    if ((0 < code) && (code <= vehicles.length)) {
        if (age <= 1) {
            console.log('a ' + color + ' new ' + vehicles[code - 1]);
        }
        else {
            console.log('a ' + color + ' old ' + vehicles[code - 1]);
        }
    }

    else {
        console.log('unknown type ' + color + ' vehicle');
    }
}

vehicleType('black', 1, 3);
vehicleType('yellow', 1, 1);
vehicleType('red', 5, 3);
vehicleType('yellow', 4, 2);
