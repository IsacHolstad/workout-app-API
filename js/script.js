const apiURL = "https://wger.de/api/v2/exercisecategory/?format=json";
console.log(apiURL)
const container = document.querySelector(".container");

async function workoutPlace () {
    try{
        const response = await fetch(apiURL)
        console.log(response)
        const responseJSON = await response.json();
        console.log(responseJSON);
        const workoutData = responseJSON.data;
        console.log(workoutData);
        for (let i = 0; workoutData.length; i++){
            console.log(workoutData[i].results)
        }
    }
    catch(error){
        container.innerHTML = `<h1>404</h1>`
    }


}
workoutPlace();