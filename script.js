function generatePokemonCard(pokemon) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "pokemon-card";

    let nameElement = document.createElement("h2");
    nameElement.textContent = pokemon.name;

    let numberElement = document.createElement("p");
    numberElement.textContent = `${pokemon.number}`;

    let typeElement = document.createElement("p");
    typeElement.textContent = "Tipo: ";
    
    pokemon.type.forEach(type => {
        let typeSpan = document.createElement("span");
        typeSpan.textContent = type;
        typeSpan.style.backgroundColor = getTypeColor(type);
        typeElement.appendChild(typeSpan);
    });

    let imageElement = document.createElement("img");
    imageElement.className = "pokemon-image";
    imageElement.src = pokemon.image_url;
    imageElement.alt = pokemon.name;

    cardDiv.appendChild(nameElement);
    cardDiv.appendChild(numberElement);
    cardDiv.appendChild(typeElement);
    cardDiv.appendChild(imageElement);

    return cardDiv;
}

var pokemonListContainer = document.getElementById("pokemon-wrapper");

getPokemonData().pokemons.forEach(pokemon => {
    var pokemonCard = generatePokemonCard(pokemon);
    pokemonListContainer.appendChild(pokemonCard);
});

function getTypeColor(type) {
    const typeColors = {
        "Planta": "green",
        "Veneno": "purple",
        "Fuego": "red",
        "Agua": "blue",
        "Bicho": "GreenYellow",
        "Volador": "skyblue",
        "Tierra": "saddlebrown",
        "Hada": "pink",
        "Eléctrico": "yellow",
        "Normal": "gray",
        "Psíquico": "magenta",
        "Lucha": "orange"
    };

    return typeColors[type] || "gray"; 
}

function getPokemonData() {
    // Ejemplo de un JSON con datos de Pokémon
    var pokemonData = {
        "pokemons": [
            {
              "name": "Bulbasaur",
              "type": [
                "Planta",
                "Veneno"
              ],
              "number": "001",
              "image_url": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
            },
            {
              "name": "Ivysaur",
              "type": [
                "Planta",
                "Veneno"
              ],
              "number": "002",
              "image_url": "https://img.pokemondb.net/artwork/ivysaur.jpg"
            },
            {
              "name": "Venusaur",
              "type": [
                "Planta",
                "Veneno"
              ],
              "number": "003",
              "image_url": "https://img.pokemondb.net/artwork/venusaur.jpg"
            },
            {
              "name": "Charmander",
              "type": [
                "Fuego"
              ],
              "number": "004",
              "image_url": "https://img.pokemondb.net/artwork/charmander.jpg"
            },
            {
              "name": "Charmeleon",
              "type": [
                "Fuego"
              ],
              "number": "005",
              "image_url": "https://img.pokemondb.net/artwork/charmeleon.jpg"
            },
            {
              "name": "Charizard",
              "type": [
                "Fuego",
                "Volador"
              ],
              "number": "006",
              "image_url": "https://img.pokemondb.net/artwork/charizard.jpg"
            },
            {
              "name": "Squirtle",
              "type": [
                "Agua"
              ],
              "number": "007",
              "image_url": "https://img.pokemondb.net/artwork/squirtle.jpg"
            },
            {
              "name": "Wartortle",
              "type": [
                "Agua"
              ],
              "number": "008",
              "image_url": "https://img.pokemondb.net/artwork/wartortle.jpg"
            },
            {
              "name": "Blastoise",
              "type": [
                "Agua"
              ],
              "number": "009",
              "image_url": "https://img.pokemondb.net/artwork/blastoise.jpg"
            },
            {
              "name": "Caterpie",
              "type": [
                "Bicho"
              ],
              "number": "010",
              "image_url": "https://img.pokemondb.net/artwork/caterpie.jpg"
            },
            {
              "name": "Metapod",
              "type": [
                "Bicho"
              ],
              "number": "011",
              "image_url": "https://img.pokemondb.net/artwork/metapod.jpg"
            },
            {
              "name": "Butterfree",
              "type": [
                "Bicho",
                "Volador"
              ],
              "number": "012",
              "image_url": "https://img.pokemondb.net/artwork/butterfree.jpg"
            },
            {
              "name": "Weedle",
              "type": [
                "Bicho",
                "Veneno"
              ],
              "number": "013",
              "image_url": "https://img.pokemondb.net/artwork/weedle.jpg"
            },
            {
              "name": "Kakuna",
              "type": [
                "Bicho",
                "Veneno"
              ],
              "number": "014",
              "image_url": "https://img.pokemondb.net/artwork/kakuna.jpg"
            },
            {
              "name": "Beedrill",
              "type": [
                "Bicho",
                "Veneno"
              ],
              "number": "015",
              "image_url": "https://img.pokemondb.net/artwork/beedrill.jpg"
            },
            {
              "name": "Pidgey",
              "type": [
                "Normal",
                "Volador"
              ],
              "number": "016",
              "image_url": "https://img.pokemondb.net/artwork/pidgey.jpg"
            },
            {
              "name": "Pidgeotto",
              "type": [
                "Normal",
                "Volador"
              ],
              "number": "017",
              "image_url": "https://img.pokemondb.net/artwork/pidgeotto.jpg"
            },
            {
              "name": "Pidgeot",
              "type": [
                "Normal",
                "Volador"
              ],
              "number": "018",
              "image_url": "https://img.pokemondb.net/artwork/pidgeot.jpg"
            },
            {
              "name": "Rattata",
              "type": [
                "Normal"
              ],
              "number": "019",
              "image_url": "https://img.pokemondb.net/artwork/rattata.jpg"
            },
            {
              "name": "Raticate",
              "type": [
                "Normal"
              ],
              "number": "020",
              "image_url": "https://img.pokemondb.net/artwork/raticate.jpg"
            },
            {
              "name": "Spearow",
              "type": [
                "Normal",
                "Volador"
              ],
              "number": "021",
              "image_url": "https://img.pokemondb.net/artwork/spearow.jpg"
            },
            {
              "name": "Fearow",
              "type": [
                "Normal",
                "Volador"
              ],
              "number": "022",
              "image_url": "https://img.pokemondb.net/artwork/fearow.jpg"
            },
            {
              "name": "Ekans",
              "type": [
                "Veneno"
              ],
              "number": "023",
              "image_url": "https://img.pokemondb.net/artwork/ekans.jpg"
            },
            {
              "name": "Arbok",
              "type": [
                "Veneno"
              ],
              "number": "024",
              "image_url": "https://img.pokemondb.net/artwork/arbok.jpg"
            },
            {
              "name": "Pikachu",
              "type": [
                "Eléctrico"
              ],
              "number": "025",
              "image_url": "https://img.pokemondb.net/artwork/pikachu.jpg"
            },
            {
              "name": "Raichu",
              "type": [
                "Eléctrico"
              ],
              "number": "026",
              "image_url": "https://img.pokemondb.net/artwork/raichu.jpg"
            },
            {
              "name": "Sandshrew",
              "type": [
                "Tierra"
              ],
              "number": "027",
              "image_url": "https://img.pokemondb.net/artwork/sandshrew.jpg"
            },
            {
              "name": "Sandslash",
              "type": [
                "Tierra"
              ],
              "number": "028",
              "image_url": "https://img.pokemondb.net/artwork/sandslash.jpg"
            },
            {
              "name": "Nidoran♀",
              "type": [
                "Veneno"
              ],
              "number": "029",
              "image_url": "https://img.pokemondb.net/artwork/nidoran-f.jpg"
            },
            {
              "name": "Nidorina",
              "type": [
                "Veneno"
              ],
              "number": "030",
              "image_url": "https://img.pokemondb.net/artwork/nidorina.jpg"
            },
            {
              "name": "Nidoqueen",
              "type": [
                "Veneno",
                "Tierra"
              ],
              "number": "031",
              "image_url": "https://img.pokemondb.net/artwork/nidoqueen.jpg"
            },
            {
              "name": "Nidoran♂",
              "type": [
                "Veneno"
              ],
              "number": "032",
              "image_url": "https://img.pokemondb.net/artwork/nidoran-m.jpg"
            },
            {
              "name": "Nidorino",
              "type": [
                "Veneno"
              ],
              "number": "033",
              "image_url": "https://img.pokemondb.net/artwork/nidorino.jpg"
            },
            {
              "name": "Nidoking",
              "type": [
                "Veneno",
                "Tierra"
              ],
              "number": "034",
              "image_url": "https://img.pokemondb.net/artwork/nidoking.jpg"
            },
            {
              "name": "Clefairy",
              "type": [
                "Hada"
              ],
              "number": "035",
              "image_url": "https://img.pokemondb.net/artwork/clefairy.jpg"
            },
            {
              "name": "Clefable",
              "type": [
                "Hada"
              ],
              "number": "036",
              "image_url": "https://img.pokemondb.net/artwork/clefable.jpg"
            },
            {
              "name": "Vulpix",
              "type": [
                "Fuego"
              ],
              "number": "037",
              "image_url": "https://img.pokemondb.net/artwork/vulpix.jpg"
            },
            {
              "name": "Ninetales",
              "type": [
                "Fuego"
              ],
              "number": "038",
              "image_url": "https://img.pokemondb.net/artwork/ninetales.jpg"
            },
            {
              "name": "Jigglypuff",
              "type": [
                "Normal",
                "Hada"
              ],
              "number": "039",
              "image_url": "https://img.pokemondb.net/artwork/jigglypuff.jpg"
            },
            {
              "name": "Wigglytuff",
              "type": [
                "Normal",
                "Hada"
              ],
              "number": "040",
              "image_url": "https://img.pokemondb.net/artwork/wigglytuff.jpg"
            },
            {
              "name": "Zubat",
              "type": [
                "Veneno",
                "Volador"
              ],
              "number": "041",
              "image_url": "https://img.pokemondb.net/artwork/zubat.jpg"
            },
            {
              "name": "Golbat",
              "type": [
                "Veneno",
                "Volador"
              ],
              "number": "042",
              "image_url": "https://img.pokemondb.net/artwork/golbat.jpg"
            },
            {
              "name": "Oddish",
              "type": [
                "Planta",
                "Veneno"
              ],
              "number": "043",
              "image_url": "https://img.pokemondb.net/artwork/oddish.jpg"
            },
            {
              "name": "Gloom",
              "type": [
                "Planta",
                "Veneno"
              ],
              "number": "044",
              "image_url": "https://img.pokemondb.net/artwork/gloom.jpg"
            },
            {
              "name": "Vileplume",
              "type": [
                "Planta",
                "Veneno"
              ],
              "number": "045",
              "image_url": "https://img.pokemondb.net/artwork/vileplume.jpg"
            },
            {
              "name": "Paras",
              "type": [
                "Bicho",
                "Planta"
              ],
              "number": "046",
              "image_url": "https://img.pokemondb.net/artwork/paras.jpg"
            },
            {
              "name": "Parasect",
              "type": [
                "Bicho",
                "Planta"
              ],
              "number": "047",
              "image_url": "https://img.pokemondb.net/artwork/parasect.jpg"
            },
            {
              "name": "Venonat",
              "type": [
                "Bicho",
                "Veneno"
              ],
              "number": "048",
              "image_url": "https://img.pokemondb.net/artwork/venonat.jpg"
            },
            {
              "name": "Venomoth",
              "type": [
                "Bicho",
                "Veneno"
              ],
              "number": "049",
              "image_url": "https://img.pokemondb.net/artwork/venomoth.jpg"
            },
            {
              "name": "Diglett",
              "type": [
                "Tierra"
              ],
              "number": "050",
              "image_url": "https://img.pokemondb.net/artwork/diglett.jpg"
            },
            {
              "name": "Dugtrio",
              "type": [
              "Tierra"
              ],
              "number": "051",
              "image_url": "https://img.pokemondb.net/artwork/dugtrio.jpg"
            },
            {
              "name": "Meowth",
              "type": [
                "Normal"
              ],
              "number": "052",
              "image_url": "https://img.pokemondb.net/artwork/meowth.jpg"
            },
            {
              "name": "Persian",
              "type": [
                "Normal"
              ],
              "number": "053",
              "image_url": "https://img.pokemondb.net/artwork/persian.jpg"
            },
            {
              "name": "Psyduck",
              "type": [
                "Agua"
              ],
              "number": "054",
              "image_url": "https://img.pokemondb.net/artwork/psyduck.jpg"
            },
            {
              "name": "Golduck",
              "type": [
                "Agua"
              ],
              "number": "055",
              "image_url": "https://img.pokemondb.net/artwork/golduck.jpg"
            },
            {
                "name": "Mankey",
                "type": ["Lucha"],
                "number": "056",
                "image_url": "https://img.pokemondb.net/artwork/mankey.jpg"
              },
              {
                "name": "Primeape",
                "type": ["Lucha"],
                "number": "057",
                "image_url": "https://img.pokemondb.net/artwork/primeape.jpg"
              },
              {
                "name": "Growlithe",
                "type": ["Fuego"],
                "number": "058",
                "image_url": "https://img.pokemondb.net/artwork/growlithe.jpg"
              },
              {
                "name": "Arcanine",
                "type": ["Fuego"],
                "number": "059",
                "image_url": "https://img.pokemondb.net/artwork/arcanine.jpg"
              },
              {
                "name": "Poliwag",
                "type": ["Agua"],
                "number": "060",
                "image_url": "https://img.pokemondb.net/artwork/poliwag.jpg"
              },
              {
                "name": "Poliwhirl",
                "type": ["Agua"],
                "number": "061",
                "image_url": "https://img.pokemondb.net/artwork/poliwhirl.jpg"
              },
              {
                "name": "Poliwrath",
                "type": ["Agua", "Lucha"],
                "number": "062",
                "image_url": "https://img.pokemondb.net/artwork/poliwrath.jpg"
              },
              {
                "name": "Abra",
                "type": ["Psíquico"],
                "number": "063",
                "image_url": "https://img.pokemondb.net/artwork/abra.jpg"
              },
              {
                "name": "Kadabra",
                "type": ["Psíquico"],
                "number": "064",
                "image_url": "https://img.pokemondb.net/artwork/kadabra.jpg"
              },
              {
                "name": "Alakazam",
                "type": ["Psíquico"],
                "number": "065",
                "image_url": "https://img.pokemondb.net/artwork/alakazam.jpg"
              },
              {
                "name": "Machop",
                "type": ["Lucha"],
                "number": "066",
                "image_url": "https://img.pokemondb.net/artwork/machop.jpg"
              },
              {
                "name": "Machoke",
                "type": ["Lucha"],
                "number": "067",
                "image_url": "https://img.pokemondb.net/artwork/machoke.jpg"
              },
              {
                "name": "Machamp",
                "type": ["Lucha"],
                "number": "068",
                "image_url": "https://img.pokemondb.net/artwork/machamp.jpg"
              },
              {
                "name": "Bellsprout",
                "type": ["Planta", "Veneno"],
                "number": "069",
                "image_url": "https://img.pokemondb.net/artwork/bellsprout.jpg"
              },
        ]
    };
    return pokemonData;
}