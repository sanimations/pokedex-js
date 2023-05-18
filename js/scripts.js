//An array of pokemon, their names, height, and their type (or types)
let pokemonRepository = (function () {

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokeClass');  //creates pokeClass to the list items
        pokemonList.appendChild(listItem);  //listItem is child of pokemonList
        listItem.appendChild(button);       //The newly created button is a CHILD of the LIST!!
        button.addEventListener('click',() => showDetails(pokemon));    //adds event to button, on click,that shows the details of the pokemon clicked
    }
    function showDetails(pokemon){
        console.log(pokemon);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    }
})();

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    })