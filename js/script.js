const apiURL = "https://wger.de/api/v2/exercisecategory/?format=json";
console.log(apiURL)
const container = document.querySelector(".container");

async function workoutPlace () {
    try{
        const response = await fetch(apiURL)
        console.log(response)
    }
    catch(error){
        container.innerHTML = `<h1>404</h1>`
    }


}
workoutPlace();