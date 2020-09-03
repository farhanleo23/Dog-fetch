const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

const randomDog = "https://dog.ceo/api/breeds/image/random";
const breedList = "https://dog.ceo/api/breeds/list";


async function fetchData(url){
    const res = await fetch(url);
    return await res.json();
}

fetch(breedList)
.then(data => generateOptions(data.message))

fetch(randomDog)
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
