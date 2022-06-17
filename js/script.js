const apiURL = "https://wger.de/api/v2/exercisecategory/?format=json&=cdbdf424b250d470cd66c299d69a3d47c6eba32c";
console.log(apiURL)
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + apiURL;
const container = document.querySelector(".container");

const cryptoContainer = document.querySelector(".container");

async function workoutNames() {
    try{
        const response = await fetch(corsFixUrl);
        console.log(response)
        const responseJSON = await response.json();
        console.log(responseJSON)
        const cryptoData = responseJSON.results;
        console.log(cryptoData)
        for (let i = 0; i < cryptoData.length; i++) {
            console.log(cryptoData[i].results.id);
            
            container.innerHTML += `<li>${cryptoData[i].results.id}</li>`;
        }
    }
    catch(error) {
        container.innerHTML = `<li class="error-message">error</li>`
       
    }
}
workoutNames();