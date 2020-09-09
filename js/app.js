const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

const randomDog = "https://dog.ceo/api/breeds/image/random";
const breedList = "https://dog.ceo/api/breeds/list";

//main function for fetching data
function fetchData(url){
    return fetch(url)
            .then(res => res.json())
}

fetchData(breedList)
.then(data => generateOptions(data.message))

fetchData(randomDog)
    .then(data => generateImage(data.message) )


function generateOptions(data){
    const options = data.map(item => `
    <option value="${item}">${item}</option>`).join('');
    select.innerHTML = options;
}

function generateImage(data){
    const html = `
        <img src="${data}" alt = >
        <p>Click to view image ${select.value}</p>
    `;
    card.innerHTML = html;
}

// function to fetch the breed image
function fetchBreedImage(){
    const breed = select.value;
    const img = card.querySelector('img');
    const p = card.querySelector('p');

    fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(data => {
            img.src = data.message;
            img.alt = breed;
            p.textContent = `Click to view more ${breed}s`;
        })
}

// event listeners
select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);