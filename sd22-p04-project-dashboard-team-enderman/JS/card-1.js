let searchButton = document.querySelector(".searchButton")
searchButton.addEventListener('click', searchPokemonFunction)

let dropbtn = document.querySelector(".dropbtn")
dropbtn.addEventListener("click", myFunction)

let selection = "pokemon"
let pokechart

function searchPokemonFunction() {
    let searchPokemon = document.querySelector(".search").value
    fetch(`https://pokeapi.co/api/v2/${selection}/${searchPokemon}`)
        .then(myData => myData.json())
        .then(jsonData => showInConsole(jsonData))

    function showInConsole(pokemon) {
        console.log(pokemon)
        const h1View = document.querySelector(".viewPokemon")
        const IDView = document.querySelector(".ID")
        for (const property in pokemon) {
            console.log(property)
            console.log(pokemon[property])
        }
        IDView.innerHTML = `ID: ${pokemon.id}`
        h1View.innerHTML = pokemon.name
        let imgTag = document.querySelector(".pokemon-img")
        if (selection == "pokemon") {
            imgTag.src = pokemon.sprites.front_default
            imgTag.style.width = "300px"
        } else if (selection == "ability") {
            imgTag.src = ""
        } else if (selection == "item") {
            imgTag.src = pokemon.sprites.default
            imgTag.style.width = "150px"

        }
        if(pokechart){
            pokechart.destroy()
        }
        pokechart = fillChart(pokemon.stats)
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let selector = document.querySelector(".selector")

let pokemon = document.querySelector(".pokemon")
pokemon.addEventListener("click", function () {
    dropbtn.textContent = "Pokemon"
    selection = "pokemon"
})

let ability = document.querySelector(".ability")
ability.addEventListener("click", function () {
    dropbtn.textContent = "Ability"
    selection = "ability"
})

let item = document.querySelector(".item")
item.addEventListener("click", function () {
    dropbtn.textContent = "Item"
    selection = "item"
})

fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1010")
    .then(data => data.json())
    .then(allPokeData => getAllPokemon(allPokeData))

function getAllPokemon(allPokeData) {
    for (let i = 0; i < allPokeData.results.length; i++) {
        console.log(allPokeData.results[i].name)
        fetch(allPokeData.results[i].url)
            .then(data => data.json())
            .then(jsonData => storePokemon(jsonData))
    }
}

function storePokemon(jsonData) {
    // console.log(`<${jsonData.name}>`)
    for (let i = 0; i < jsonData.stats.length; i++) {
        // console.log(jsonData.stats[i].stat.name)
        // console.log(jsonData.stats[i].base_stat)
    }
}

//---------------------------------------------------------------- CHARTJS

const data = {
    labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};

function fillChart(stats) {
    return new Chart("myChart", {
        type: "radar",
        data: {
            labels: [
                'hp',
                'attack',
                'defense',
                'special-attack',
                'special-defense',
                'speed'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [stats[0].base_stat, stats[1].base_stat, stats[2].base_stat, stats[3].base_stat, stats[4].base_stat, stats[5].base_stat],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }]
        },
        options: {
            legend: { display: false },
            scale: {
                r: {
                    min: 0
                }
            }
        }
    });
}