'use strict';

function advertisement(vehicleNames) {
    const result = 'Amazing Zaed\'s Garage, we service ' + vehicles[0] + 's, ' + vehicles[1] + 's, ' + vehicles[2] + 's, ' + vehicles[3] + 's and ' + vehicles[4] + 'es.';
    return result;
}

const vehicles = ['car', 'motorbike', 'caravan', 'bike'];
vehicles.push('bus');
const text = advertisement(vehicles);
console.log(text);
