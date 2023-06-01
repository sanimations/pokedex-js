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
    function LoadList() {

        /*Created a promise function.  Run the fetch function on the apiUrl.
        This is the promise and the response being another promise */
        return fetch(apiUrl).then(function (response) {

            //the reponse is converted to json format and returned
            return response.json();
        }).then(function (json) {

            //Run forEach through all the API and create a pokemon object with name & details
            //json.results refers to the api in the link, results is the name of the object
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);  //this is the add functio we created
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();

            //This one takes the parameter details and goes into each details url in the api
            //first you find the sprite in the pokemon's details, then height, then types
        }).then(function (details) {
            let types = "";
            item.frontSprite = details.sprites.front_default;
            item.height = details.height;
            //loop through types since it is an array of objects
            details.types.forEach(function (item) {
                types += `${item.type.name} `;
            });
            item.types = types;
            item.backSprite = details.sprites.back_default;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        listItem.classList.add('list-group-item');
        button.classList.add('pokeClass', 'btn');  //creates pokeClass and btn to the list items
        button.setAttribute("data-toggle", "modal")
        button.setAttribute("data-target", "#exampleModal")
        pokemonList.appendChild(listItem);  //listItem is child of pokemonList
        listItem.appendChild(button);       //The newly created button is a CHILD of the LIST!!
        button.addEventListener('click', () => showDetails(pokemon));    //adds event to button, on click,that shows the details of the pokemon clicked
    }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }
    function showModal(pokemon) {
        //saving each element inside different variable
        let modalBody = $(".modal-body");
        let modalTitle = $(".modal-title");
        let modalHeader = $(".modal-header");
        let modalContainer = document.querySelector('#modal-container');

        modalTitle.empty();
        modalBody.empty();

        let nameElement = $("<h1>" + pokemon.name + "</h1>");

        let imageElementFront = $('<img class="modal-img" style="width:50%">');
        imageElementFront.attr("src", pokemon.frontSprite);
        let imageElementBack = $('<img class="modal-img" style="width:50%">');
        imageElementBack.attr("src", pokemon.backSprite);
        let heightElement = $("<p>" + "Height: " + pokemon.height + "</p>");
        let typesElement = $("<p>" + "Types: " + pokemon.types + "</p>");

        //appending the variables that grabbed information and added them to the elements already saved
        modalTitle.append(nameElement);
        modalBody.append(imageElementFront);
        modalBody.append(imageElementBack);
        modalBody.append(heightElement);
        modalBody.append(typesElement);

        //Clear all existing modal content
        modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        //Add the new modal content
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;

        let contentElement = document.createElement('img');
        contentElement.src = pokemon.frontSprite;
        contentElement.src = pokemon.backSprite;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);


        modalContainer.classList.add('is-visible');

        modalContainer.addEventListener('click', (e) => {
            //Since this is also triggered when clicking inside the modal we only want to close if the user clicks directly on the overlay
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });
    }

    document.querySelector('#show-modal').addEventListener('click', () => {
        showModal(pokemon);
    });

    function hideModal() {
        document.querySelector('#modal-container').classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        LoadList: LoadList,
        loadDetails: loadDetails
    }
})();

pokemonRepository.LoadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});