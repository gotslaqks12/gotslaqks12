// How to request data from an API using javaScript and jQuery

// There are many ways to do this!
// 1. jQuerys $.ajax() function
// 2. The Browser's fetch() function 
// 3. Using the Axios hhtp client library

// VARIABLES
const URL = "https://pokeapi.co/api/v2/pokemon/";

// ELEMENT REFERENCES jQuery variables
const $name = $('#name');
const $weight = $('#weight');
const $height = $('#height');
const $id = $('#id');
const $form = $('form');
const $input = $('input[type="text"]');

// EVENT LISTENERS
$form.on('submit', handleGetData)


// function handleGetData(event){

function handleGetData(event) {


  const userInput = $input.val();

  $.ajax(URL + userInput).then(function (data) {
    console.log('data is ready')
    // console.log(data)
    $name.text(data.name)
    $weight.text(data.weight)
    $height.text(data.height)
    $id.text(data.id)
    $('main').append(`<img src="${data.sprites.other["official-artwork"].front_default}"/>`)
  }, function (error) {
    console.log('Pokemon Not Found')
    console.log(error)
    document.querySelector('.pokemonBox').innerHTML = `
      <h2>Pokemon Not Found!</h2>`
  })

  event.preventDefault();
}
