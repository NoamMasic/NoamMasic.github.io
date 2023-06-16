fetch(`https://covid19api.com/`)
    .then(data => data.json())
    .then(jsonData => fetchWeather(jsonData))

function fetchWeather(jsonData){
    console.log(jsonData)
}