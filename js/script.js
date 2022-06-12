const apiURL = "https://wger.de/api/v2/exercisecategory/?format=json";
console.log(apiURL)
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + apiURL;
const container = document.querySelector(".container");

async function workoutPlace () {
    try{
        const response = await fetch(corsFixUrl)
        console.log(response)
        const responseJSON = await response.json();
        console.log(responseJSON);
        const workoutData = responseJSON.data;
        console.log(workoutData);
        for (let i = 0; i < responseJSON.length; i++){
            console.log(responseJSON[i].results.name)
            container.innerHTML += `<li>${responseJSON[i].results.name}</li>`;
        }
    }
    catch(error){
        container.innerHTML += `<h1>404</h1>`
    }


}
workoutPlace();