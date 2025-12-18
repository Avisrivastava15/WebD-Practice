
const header = document.getElementById("head-img");
const dataa = document.getElementById("data");

async function fetchData() {
    
    const name = document.getElementById("pokemonName").value.toLowerCase().trim();
    const card = document.getElementById("pokedex");

     if (!name) {
         document.getElementById("cards").style.display = "none";
         resetUI();
        alert("Please enter a Pokémon name!");
        return;
    }
    
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        if (res.ok){
            document.body.style.alignItems = "flex-start"; 
            // Add classes for animation
            header.classList.add("active-header");
            dataa.classList.add("active-data");
        }

        const pokemonData = await res.json();

        // Show cards container
        document.getElementById("cards").style.display = "flex";

        // Card 1
        document.getElementById("pokemonImg").src =pokemonData.sprites.other["official-artwork"].front_default;
        document.getElementById("name").innerText = pokemonData.name;
        document.getElementById("type").innerText =pokemonData.types.map(t => t.type.name).join(", ");

        // Card 2
        document.getElementById("height").innerText = `Height: ${pokemonData.height / 10} m`;
        document.getElementById("weight").innerText =`Weight: ${pokemonData.weight / 10} kg`;
        document.getElementById("baseExp").innerText = `Base Exp: ${pokemonData.base_experience}`;
        document.getElementById("order").innerText =`Order: ${pokemonData.order}`;

        // Card 3
        document.getElementById("hp").innerText = `HP: ${pokemonData.stats[0].base_stat}`;
        document.getElementById("attack").innerText = `Attack: ${pokemonData.stats[1].base_stat}`;
        document.getElementById("defense").innerText = `Defense: ${pokemonData.stats[2].base_stat}`;
        document.getElementById("speed").innerText = `Speed: ${pokemonData.stats[5].base_stat}`;



    } 
    
    catch (err) {
         
        document.getElementById("cards").style.display = "none";
        resetUI();
        alert("Pokémon not found!");
    }
}

function resetUI() {
    document.getElementById("cards").style.display = "none";
    header.classList.remove("active-header");
    dataa.classList.remove("active-data");
    document.body.style.alignItems = "center";
}
