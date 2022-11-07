const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// forEach Method

// let selectedNames = [];

// const min = 2;
// const max = 4;


// myArray.forEach((element, index) => {
//     if(index >= min && index <= max){
//         selectedNames.push(element)
//     }
// })

// console.log(selectedNames)



// filter method

const min = 2;
const max = 4;


let selectedNames = myArray.filter((element, index) => {
    if( index >= min && index <= max){
        return true
    }
})

console.log(selectedNames)