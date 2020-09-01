const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

const randomDog = "https://dog.ceo/api/breeds/image/random";


// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch(randomDog)
    .then(response => response.json())
    .then(data => console.log(data.message))

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------



// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------


