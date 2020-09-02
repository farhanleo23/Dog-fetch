const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

const randomDog = "https://dog.ceo/api/breeds/image/random";



fetch(randomDog)
    .then(response => response.json())
    .then(data => generateImage(data.message) )


function generateImage(data){
    const html = `
        <img src="${data}" alt = >
        <p>Click to view image ${select.value}</p>
    `;
    card.innerHTML = html;
}
