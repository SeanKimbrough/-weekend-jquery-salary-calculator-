
// State

// an array to store all of our cars
let garage = [
  {
    make: 'Jeep',
    model: 'Wagoneer',
    year: 2022, 
  },
  {
    make: 'Mercedes Benz',
    model: 'C-Class',
    year: 2021,
  },
  {
    make: 'Lexus',
    model: 'Rx',
    year: 2023,
  },
  {
    make: 'Cadillac',
    model: 'Lyric',
    year: 2023,
  },
];


$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!", readyNow);

  $('#addCarForm').on('submit', onAddCarToGarage);


  // add click event handler that calls the addNewCar function

}

function addNewCar() {
  // get input values

  // add to array

  // anything else?

}



function render() {
  // update the DOM

}