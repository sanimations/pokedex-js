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

        /*Created a promise function.  Run the fetch function on the apiUrl.
        This is the promise and the response being another promise */
        return fetch(apiUrl).then(function(response){
           
            //the reponse is converted to json format and returned
            return response.json();
        }).then(function(json){

            //Run forEach through all the API and create a pokemon object with name & details
            //json.results refers to the api in the link, results is the name of the object
            json.results.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);  //this is the add functio we created
                });
            }).catch(function (e){
                console.error(e);
            })
        }
    function loadDetails(item){
        let url = item.detailsUrl;
        return fetch(url).then(function (response){
            return response.json();

            //This one takes the parameter details and goes into each details url in the api
            //first you find the sprite in the pokemon's details, then height, then types
        }).then(function(details){
            item.imageUrl = details.sprites.front_default;
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
        pokemonRepository.loadDetails(pokemon).then(function(){
            console.log(pokemon);
        });
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