/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('An error occured!');
  const data = await response.json();
  return data;
}

async function fetchAndPopulatePokemons(url) {
  //Create the button
  const btn = document.createElement('button');
  btn.textContent = 'Show';
  document.body.appendChild(btn);

  //Create the select
  try {
    const data = await fetchData(url);

    btn.addEventListener('click', () => {
      const pokemons = document.createElement('select');
      pokemons.setAttribute('id', 'selected');
      document.body.appendChild(pokemons);

      if (pokemons.options.length === 0) {
        data.results.forEach((element) => {
          const pokemon = document.createElement('option');
          pokemon.setAttribute('value', element.url);
          const optionText = document.createTextNode(element.name);
          pokemon.appendChild(optionText);
          pokemons.appendChild(pokemon);
        });
      }
    });

    pokemons.addEventListener('change', () => {
      fetchImage();
    });

    // return pokemons;
  } catch (error) {
    console.log(error);
  }
}

async function fetchImage() {
  const dropdown = document.getElementById('selected');
  const pokemonUrl = dropdown.value;
  const data = await fetchData(pokemonUrl);

  const imageUrl = data.sprites.front_default;

  let image = document.querySelector('img');
  if (!image) {
    image = document.createElement('img');
    document.body.appendChild(image);
  }

  image.src = imageUrl;
  image.alt = data.name;
}
async function main() {
  try {
    const result = await fetchAndPopulatePokemons(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener('load', main);
