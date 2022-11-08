let minimum = Infinity

const bikes = [
    {
        brand: 'Trek',
        weight: 12
    },
    {
        brand: 'Santa Cruz',
        weight: 9
    },
    {
        brand: 'Cannondale',
        weight: 10
    }
];


bikes.forEach(({weight}) => {
    if(weight < minimum){
        minimum = weight
    }
})

let selectedBike = bikes.find(value => {
    return value.weight == minimum
})

console.log(selectedBike)

document.getElementById('print').innerHTML = `Brand:${selectedBike.brand} weight:${selectedBike.weight}`


