const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// forEach Method

let selectedNames = [];

const min = 2;
const max = 4;


myArray.forEach((element, index) => {
    if(index >= min && index <= max){
        selectedNames.push(element)
    }
})

console.log(selectedNames)