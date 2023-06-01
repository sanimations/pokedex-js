/* Practice coding

let myName = 'Bob';
document.write(myName);
myName = 'John Doe';
document.write(myName);

let size = 100;
let doubleSize = size * 2;
let minSize = (doubleSize * 2) - (size / 2);
document.write(minSize); 
*/

/*This goes through each array cell
it will print the name and height of the pokemon
it contains an if statement that will also add an extra sentence
depending on the pokemon height

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1.0) {
        document.write(pokemonList[i].name + ' (height:' + pokemonList[i].height + ') - Wow, that\'s big! ');
    } else if (pokemonList[i].height <= 0.5) {
        document.write(pokemonList[i].name + ' (height:' + pokemonList[i].height + ') - Wow, that\'s tiny! ');
    } else{
        document.write(pokemonList[i].name + ' (height:' + pokemonList[i].height + ') ');
    }
}
*/
/*pokemonRepository.getAll().forEach(function(pokemon){
    if (pokemon.height > 1.0) {
        document.write(pokemon.name + ' (height:' + pokemon.height + ') - Wow, that\'s big! ');
    } else if (pokemon.height <= 0.5) {
        document.write(pokemon.name + ' (height:' + pokemon.height + ') - Wow, that\'s tiny! ');
    } else{
        document.write(pokemon.name + ' (height:' + pokemon.height + ') ');
    }
}) */

/* fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
  return response.json(); // This returns a promise!
}).then(function (pokemonList) {
  console.log(pokemonList); // The actual JSON response
}).catch(function () {
  // Error
}); */

// { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison'] },
        // { name: 'Ditto', height: 0.3, type: 'normal' },
        // { name: 'Eevee', height: 0.3, type: 'normal' },
        // { name: 'Ekans', height: 2.0, type: 'poison' },
        // { name: 'Regigigas', height: 3.7, type: 'normal' },
        // { name: 'Suicune', height: 2.0, type: 'water' },
        // { name: 'Arcanine', height: 1.9, type: 'fire' },
        // { name: 'Cyndaquil', height: 0.5, type: 'fire' },
        // { name: 'Mr. Mime', height: 1.3, type: ['psychic', 'fairy'] },
        // { name: 'Poliwrath', height: 1.3, type: ['water', 'fighter'] },
        // { name: 'Banette', height: 1.1, type: 'ghost' }

            //     pokemon.get(url, "pokemon.name" + "pokemon.type" + "pokemon.height");
    //     let myPokemon = JSON.stringify(pokemon);
    //     .then(funtion(json){
    //         json.
    //     })
    // }
        
//     <!-- <nav class="navbar navbar-light bg-light">
//     <a class="navbar-brand" href="https://www.youtube.com/watch?v=0pjsxNSwSSA&t=4758s&ab_channel=GlobalGaming">
//       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png" width="32" height="32" class="d-inline-block align-top" alt="">
//       PokeDex
//     </a>
//   </nav> -->

//function showModal(pokemon){
// let modalContainer = document.querySelector('#modal-container'); 
// Clear all existing modal content
// modalContainer.innerHTML = '';
      
// let modal = document.createElement('div');
// modal.classList.add('modal');

/* .modal {
  margin: auto;
  display: inline-block;
  box-sizing: border-box;
  background: #fff;
  padding: 15px;
  width: 100%;
  max-width: 700px;
  text-align: left;
} */

/* .modal-close {
  float: right;
  -webkit-appearance: none;
  border: 0;
  background: none;
  color: #777;
  text-decoration: underline;
  margin-top:auto;
} */

/* .modal h1 {
  margin-top: 60px;
} */

/* .modal p {
  margin-bottom: 0;
} */

/* .pokeClass{
    color: #f5ccd4;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    border-color: #c9def4;
    background-color: #764E7E;
    text-align: center;
    padding: 2%;
    width: 15%;
} */
/* #modal-container{
  display: none;
} */
/* #modal-container.is-visible {
  position: fixed;
  padding: 20px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  
  /* to show it above other content */
//   z-index: 999; 
  
  /* to allow scrolling if the screen is not high enough*/
//   overflow: auto; 
  
  /* this is used to center the modal */
//   display: grid;
//   text-align: center;
// } */
/* #show-modal{
  display: none;
} */

// <!-- <div class="list-group">
// <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
// <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
// <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
// </div> -->