const pokemonContainer = document.querySelector(".container");

// Traer solo un pokemon 
function fetchPokemon(id) {
    // Traemos cada uno de los pokemon con su ID
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    // Nos traemos el .json de cada uno
    .then(res => res.json())
    // Nos traemos los datos.
    .then(data => {
        createPokemon(data)
    });
}


// Trae varios pokemons (Empezamos desde el 1 porque no existe pokemon 0)
function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    } 
}

// Crear las tarjetas de cada pokemon para verlas en el DOM
function createPokemon(pokemon){
    //Creamos el contenedor de la tarjeta
    const card = document.createElement("div");
    // Le agregamos una clase al div de la tarjeta
    card.classList.add("pokemon-block");
    // Creamos el div que contendrá la imagen
    const imagenContainer = document.createElement("div");
    // Le agregamos una clase al div de la imagen
    imagenContainer.classList.add("img-container");

    //Creamos la imagen
    const imagen = document.createElement("img");
    //URL de la imagen (source)
    imagen.src = pokemon.sprites.front_default;

    //Creamos el numero del pokemon
    const number = document.createElement("p");
    number.textContent = `# ${pokemon.id}`;
    //Creamos el nombre del pokemon
    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    imagenContainer.appendChild(imagen);
    
    card.appendChild(imagenContainer);
    card.appendChild(number);
    card.appendChild(name);

    // Añadimos todo al DIV principal.
    pokemonContainer.appendChild(card);
}

fetchPokemons(130);