const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const myApi = `https://wger.de/api/v2/exercise/${id}`;

const container = document.querySelector(".contaienr");

(async function workouts() {
    try{
        const response = await fetch(myApi);
        console.log(response)
        const excersises = await response.json();
        console.log(excersises);
    }
    catch(error){
        console.log("error")
    }

})();


