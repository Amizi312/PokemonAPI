async function bringThemAll(){
    const allPokeList = await fetch ("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50")
    const pokeList = await allPokeList.json()
    displayPokes(pokeList)
}

function displayPokes(pokemons) {
    const pokeList = document.getElementById("pokeList")
    let html = "<ul>"
    for(const pokemon of pokemons.results) {
        const li = `
        <li> 
            ${pokemon.name}
        </li>
        `
        html += li
    }
    html += "</ul>"
    pokeList.innerHTML = html
}
