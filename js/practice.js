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
        