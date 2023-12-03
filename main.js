async function bringThemAll(){
    const pokeList = await fetch ("https://pokeapi.co/api/v2/pokemon")
    console.log(pokeList)
    
}