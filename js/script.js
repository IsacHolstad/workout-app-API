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
        const cryptoData = responseJSON.data;
        console.log(cryptoData)
        for (let i = 0; i < responseJSON.length; i++) {
            console.log(responseJSON[i].results.name)
            
            container.innerHTML += `<li><a href="detailcrypto.html?id=${cryptoData[i].id}">${cryptoData[i].id} ${cryptoData[i].supply}</a></li>`;
        }
    }
    catch(error) {
        container.innerHTML += `<li>404</li>`
       
    }
}
workoutNames();