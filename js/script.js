const apiURL = "https://wger.de/api/v2/exercisecategory/?format=json&=cdbdf424b250d470cd66c299d69a3d47c6eba32c";
console.log(apiURL)


const container = document.querySelector(".container");
const cryptoContainer = document.querySelector(".container");

(async function workoutNames() {
    try{
        const response = await fetch(apiURL);
        console.log(response)
        const responseJSON = await response.json();
        console.log(responseJSON)
        const cryptoData = responseJSON.results;
        console.log(cryptoData)
        for (let i = 0; i < cryptoData.length; i++) {
            console.log(cryptoData[i].results);
        
            container.innerHTML += `<li class="workout-list"><a href="detail-workout.html?id=${cryptoData[i].name} ${cryptoData[i].id}"</a>${cryptoData[i].name}</li>`;
        }
    }
    catch(error) {
        container.innerHTML = `<li class="error-message">error</li>`
    }
}
)();