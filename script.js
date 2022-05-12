document.querySelector('#search').addEventListener('click', getPokemon);


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(pm) {
  const name = document.querySelector('#pokemonName').value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.pokemonBox').innerHTML = `
    <div>
        <img src="${data.sprites.other["official-artwork"].front_default}"
        alt="${capitalizeFirstLetter(data.name)}"/>
    </div>
    <div class="pokemonInfo">
        <h3>${capitalizeFirstLetter(data.name)}</h3>
        <br>
        <p>Weight ${data.weight}</p>
        <br>
        <p>Height ${data.height}</p>
        <br>
        <p>ID # ${data.id}</p>

    </div>`
    
    })
    .catch((err) => {
      document.querySelector('.pokemonBox').innerHTML = `
      <h2>Pokemon Not Found!</h2>`
      console.log('Pokemon not found', err);
    });
  pm.preventDefault();
}
