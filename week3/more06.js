'use strict';

function vehicleType(color, code, age) {
    if (code === 1) {
        if (age <= 1) {
            console.log('it is a ' + color + ' new car');
        }
        else {
            console.log('it is a ' + color + ' old car')
        }
    }
    else if (code === 2) {
        console.log('it is a ' + color + ' motorbike');
    }
    else {
        console.log('unknown vehicle');
    }
}

vehicleType('black', 1, 5);
vehicleType('yellow', 1, 1)
vehicleType('red', 2, 3);
vehicleType('yellow', 3, 5);
