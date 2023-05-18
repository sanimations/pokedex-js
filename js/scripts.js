//An array of pokemon, their names, height, and their type (or types)
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }
    function LoadList(){
        return fetch(apiUrl).then(function(response){
            return response.json();
        }).then(function(json){
            json.results.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                });
            }).catch(function (e){
                console.error(e);
            })
        }
    function loadDetails(pokemon){
        let url = item.detailsUrl;
        return fetch(url).then(function (response){
            return response.json();
        }).then(function(details){
            item.imageUrl = detils.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function(e){
            console.error(e);
        });
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
        showDetails: showDetails,
        LoadList : LoadList,
        loadDetails : loadDetails
    }
})();

pokemonRepository.LoadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    })