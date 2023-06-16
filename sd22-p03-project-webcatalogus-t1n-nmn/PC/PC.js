fetch('https://mbo-sd.nl/period3-fetch/games-pc-blizzard-entertainment')
     .then(myData => myData.json())
     .then(textData => showInConsole(textData))

function showInConsole(textData){
     console.log(textData);
}

fetch('https://mbo-sd.nl/period3-fetch/games-pc-epic-games')
     .then(myData => myData.json())
     .then(textData => showInConsole(textData))

function showInConsole(textData){
     console.log(textData);
}

fetch('https://mbo-sd.nl/period3-fetch/games-pc-riot-games')
     .then(myData => myData.json())
     .then(textData => showInConsole(textData))

function showInConsole(textData){
     console.log(textData);


     const row = document.querySelector(".row");
     row.innerHTML += createCards(textData);
}

// Maak cards met de meegeleverde data die ontvangen is van fetch().
function createCards(data) {
    let code = "";
    for (let i = 0; i < data.length; i++) {
     const game = data[i];
     
     const card = `
          <div class="card">
               <img class="card-img-top" src="${game.img}" alt="Card image cap">
               <div class="card-body">
                    <h5 class="card-title">${game.title}</h5>
                    <p> ${game.description} </p>
               </div>
          </div>
     `;

     code += card
}

return code;
}