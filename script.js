function getPokemon(){
    let pokemon = document.getElementById("pokemon").value
    console.log(pokemon)
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon
    let pokemondata 
    fetch(url).then(response => response.json()).then(data => {
        let weight = data.weight
        console.log(weight)
        let height = data.height
        console.log(height)
        document.getElementById("height").innerHTML = "Height = " + height
        document.getElementById("weight").innerHTML = "Weight = " + weight

    })
}