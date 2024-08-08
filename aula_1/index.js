// var nome = prompt('Digite o nome')
// console.log('nome ' + nome)
// document.write('nome ' + nome)



async function getData(url) {
    const data = await fetch(url).then(async (res) => await res.json())
    return data
}

async function listData() {
    const container = document.getElementById("container")
    const data = await getData('https://pokeapi.co/api/v2/pokemon')
    
    for(let i = 0; i < 2; i++) {
        const response = await getData(data.results[i].url)
        const pokemons = []
        for(let j = 0; j < data.results.length / 2; j++) {
            for(let k = 0; k < 2; k++) {
                const randomValue = Math.random(data.results.length)
                if(!randomValue) {
                    console.log('vazio')
                    pokemons[randomValue].push({
                        name: response.name,
                        image: response.sprites.front_default
                    })
                }
            }
            console.log(pokemons)


        const listItem = document.createElement("li")
        listItem.className = "card"
        listItem.innerHTML = ''
        const title = document.createElement("p")
        const image = document.createElement("img")
        image.className = "img"
        title.innerHTML = pokemons[i].name
        image.src = pokemons[i].image
        listItem.style.listStyle = 'none'
        // listItem.style.fontSize = '10px'
        listItem.addEventListener("click", () => {
            listItem.appendChild(title)
            listItem.appendChild(image)
        })
        
        container.appendChild(listItem)
    }
}
}

listData()