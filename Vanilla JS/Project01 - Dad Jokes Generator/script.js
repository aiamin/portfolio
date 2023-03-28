const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "x3BmDwNEHJQl7/Iki1e46g==PB4CzXrinjaplaN0";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function getJoke() {
  try {
    jokeEl.innerText = "updating...";

    btnEl.disabled = true;
    btnEl.innerHTML = "Loading";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerHTML = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {

    jokeEl.innerText = "An erroe happened, try again later";
    
    btnEl.disabled = false;
    btnEl.innerHTML = "Tell me a joke";
  }
}

btnEl.addEventListener("click", getJoke);
