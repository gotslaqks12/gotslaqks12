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

  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.pokemonBox').innerHTML = `
    <div>
        <img src="${data.sprites.other["official-artwork"].front_default}" 
        alt="${capitalizeFirstLetter(data.name)}"/>
    </div>
    <div class="pokemonInfo">
        <h3>${capitalizeFirstLetter(data.name)}</h3>
        <p>${data.weight}</p>
        <p>${data.type}</p>
        <p>${data.No}</p>
        
    </div>
    `;

    })
    .catch((err) => {
      console.log('Pokemon not found', err);
    });

  pm.preventdefault();

}

