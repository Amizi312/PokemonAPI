async function bringThemAll(){
    const allPokeList = await fetch ("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50")
    const pokeList = await allPokeList.json()
    displayPokes(pokeList)
    document.getElementById("CATCH").style.display = "none"
    document.getElementById("pokeBox").style.display = "block"    
    document.getElementById("start").style.display = "inline-block"
    document.getElementById("searchPoke").style.display = "inline-block"
}

function displayPokes(pokemons) {
    const pokeList = document.getElementById("pokeBox")
    let html = "<ul>"
    let pid = 1
    for(const pokemon of pokemons.results) {
        const li = `
        <li id=${pokemon.name}> 
            ${pokemon.name}
        </li>
        `
        html += li
        pid++
    }
    html += "</ul>"
    pokeList.innerHTML = html
}

async function searchPoke(){
    const pokeList = document.getElementById("pokeBox")
    const searching = document.getElementById("searchPoke").value
    let searchedPoke
    try {
        searchedPoke = await fetch (`https://pokeapi.co/api/v2/pokemon/${searching}/`) 
    } catch (error) {
        throw new Error("no such Pokemon")
    }
    document.getElementById("searchPoke").value=""
    console.log(searchPoke)
    const pokemon = await searchedPoke.json()
    console.log(pokemon)
    let html = `Name: ${pokemon.name} <br><br> Abilities:` 
    for (let i=0; i<pokemon.abilities.length; i++)
    {   
        const pA = ` 
        ${pokemon.abilities[i].ability.name}       
        `
        html += pA
    }
    html += `<br><br>Type(s):` 
    for (let i=0; i<pokemon.types.length; i++)
    {   
        const pT = ` 
        ${pokemon.types[i].type.name}
        `
        html += pT
    }
    pokeList.innerHTML = html
    html += `<br><br>Move(s):` 
    for (let i=0; i<pokemon.moves.length; i++)
    {   
        const pM = ` 
        ${pokemon.moves[i].move.name}
        `
        html += pM
    }
    pokeList.innerHTML = html
    html += `<br><br><img src =${pokemon.sprites.other.home.front_default}>`
    pokeList.innerHTML = html
    }
