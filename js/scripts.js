//An array of pokemon, their names, height, and their type (or types)
let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison'] },
        { name: 'Ditto', height: 0.3, type: 'normal' },
        { name: 'Eevee', height: 0.3, type: 'normal' },
        { name: 'Ekans', height: 2.0, type: 'poison' },
        { name: 'Regigigas', height: 3.7, type: 'normal' },
        { name: 'Suicune', height: 2.0, type: 'water' },
        { name: 'Arcanine', height: 1.9, type: 'fire' },
        { name: 'Cyndaquil', height: 0.5, type: 'fire' },
        { name: 'Mr. Mime', height: 1.3, type: ['psychic', 'fairy'] },
        { name: 'Poliwrath', height: 1.3, type: ['water', 'fighter'] },
        { name: 'Banette', height: 1.1, type: 'ghost' }
    ];

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
        button.addEventListener('click',showDetails(pokemon));    //adds event to button, on click,that shows the details of the pokemon clicked
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