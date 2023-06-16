let dropbtn = document.querySelector(".dropbtn")
dropbtn.addEventListener("click", myFunction)

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let Homepage = document.querySelector(".Homepage")
Homepage.addEventListener("click", function () {
    dropbtn.textContent = "Home page"
    selection = "Home page"
})

let Supportpage = document.querySelector(".Supportpage")
Supportpage.addEventListener("click", function () {
    dropbtn.textContent = "Support page"
    selection = "Support page"
})

let Loginscreen = document.querySelector(".Loginscreen")
Loginscreen.addEventListener("click", function () {
    dropbtn.textContent = "Login screen"
    selection = "Login screen"
})

let Chatbot = document.querySelector(".Chatbot")
Chatbot.addEventListener("click", function () {
    dropbtn.textContent = "Chatbot"
    selection = "Chatbot"
})

let Dashboard = document.querySelector(".Dashboard")
Dashboard.addEventListener("click", function () {
    dropbtn.textContent = "Dashboard"
    selection = "Dashboard"
})