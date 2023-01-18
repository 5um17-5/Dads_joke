const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "wrEyfgfJEjveCYYYEe0kMA==x5WhTPIAwvPvyYVv";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";



async function getJoke(){

    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";

        //console.log(data[0].joke);
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerHTML = "Error occure, try again.";
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";
        console.log(error);
    }

}

btnEl.addEventListener("click", getJoke);
