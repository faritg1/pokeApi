const container = document.getElementById("container");
const numberPokemo = 150;
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};
const tipoColores = Object.keys(colors)

function llamarPokemon(){
    for (let i = 1; i <= numberPokemo; i++) {
        apiPokemon(i);
    }
};

async function apiPokemon(id){
    let apiUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let pokemon = await apiUrl.json();
    console.log(pokemon);
    cartaPokemon(pokemon)
};
llamarPokemon();


function cartaPokemon(pokemon){
    const containerPokemon = document.createElement("div");
    containerPokemon.classList.add("pokemon");

    const tipoPokemon = pokemon.types.map(elemt => elemt.type.name);
    const tipo = tipoColores.find(type => tipoPokemon.indexOf(type) > -1);
    const color = colors[tipo];
    containerPokemon.style.backgroundColor = color;

    const pokemonHtml =`
    <div class="front">
        <div class="imgPokemon">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="Pokemos">
        </div>
        <div class="infoPokemon">
            <span class="id">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="name">${pokemon.name}</h3>
            <small class="type">Type: <span>${tipo}</span></small>
        </div>    
    </div>
    `;
    containerPokemon.innerHTML = pokemonHtml;
    container.appendChild(containerPokemon);


}


