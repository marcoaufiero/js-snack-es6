const bikes = [
    {
        brand: 'Trek',
        weight: 10
    },
    {
        brand: 'Santa Cruz',
        weight: 11
    },
    {
        brand: 'Cannondale',
        weight: 9
    }
];

const {brand, weight} = bikes[2];

document.getElementById('print').innerHTML = `${brand} ${weight}`


