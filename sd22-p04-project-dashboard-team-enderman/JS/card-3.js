fetch(`https://rickandmortyapi.com/api/character?page=1`)
    .then(data => data.json())
    .then(jsonData => fetchRick(jsonData))

function fetchRick(jsonData) {
    allPages().then(mydata => showAllresults(mydata))
}

async function allPages() {
    const allResults = [];
    for (let i = 0; i <= 42; i++) {
        const data = await showFetch(i)
        for (let j = 0; j < data.length; j++) {
            const character = data[j];
            allResults.push(character)
        }
    }
    return allResults
}

function showAllresults(jsonData) {
    console.log(jsonData)
}

async function showFetch(i) {
    
 let response = await fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
 let data = await response.json();
 return data.results
}