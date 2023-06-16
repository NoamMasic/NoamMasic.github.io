let textInput = document.querySelector(".textbox");
let textDisplay = document.querySelector(".textDisplay");

textInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        textSend.click();
    }
})

let textSend = document.querySelector(".text-send")
textSend.addEventListener("click", showHideChatbot)

let latest;
let textResult = "";

function showHideChatbot() {
    let time = new Date()
    if (textInput.value.trim() != "") {
        if(selectedPerson == "Maurits"){
            document.querySelector(".latest1").textContent = textInput.value;
        } else if(selectedPerson == "Noam"){
            document.querySelector(".latest2").innerHTML = textInput.value;
        } else if(selectedPerson == "Dylano"){
            document.querySelector(".latest3").innerHTML = textInput.value;
        }
        textDisplay.innerHTML += `<div class="customChat-text right">${textInput.value}<div class="time">${time.getHours()}.${(time.getMinutes()<10?'0':'') + time.getMinutes()}</div></div>`
        textDisplay.scrollTop = textDisplay.scrollHeight - textDisplay.clientHeight;
        textInput.value = "";
        if(document.querySelector(".latest1").textContent.length > 35){
            textResult = document.querySelector(".latest1").textContent.substring(0, 35);
            if (document.querySelector(".latest1").textContent.length >= 1) {
                document.querySelector(".latest1").textContent = textResult.toLocaleLowerCase() + "...";
            }
        }
        if(document.querySelector(".latest2").textContent.length > 35){
            textResult = document.querySelector(".latest2").textContent.substring(0, 35);
            if (document.querySelector(".latest2").textContent.length >= 1) {
                document.querySelector(".latest2").textContent = textResult.toLocaleLowerCase() + "...";
            }
        }
        if(document.querySelector(".latest3").textContent.length > 35){
            textResult = document.querySelector(".latest3").textContent.substring(0, 35);
            if (document.querySelector(".latest3").textContent.length >= 1) {
                document.querySelector(".latest3").textContent = textResult.toLocaleLowerCase() + "...";
            }
        }
    }
}

let data1 = ""
let data2 = ""
let data3 = ""

let selectedPerson = "Maurits"

let Maurits = document.querySelector(".contact1")
Maurits.addEventListener("click", () => {
    textInput.value = ""
    if (selectedPerson == "Noam") {
        data2 = textDisplay.innerHTML
        textDisplay.innerHTML = ""
        textDisplay.innerHTML += data1
    } else if (selectedPerson == "Dylano") {
        data3 = textDisplay.innerHTML
        textDisplay.innerHTML = ""
        textDisplay.innerHTML += data1
    }
    Maurits.style.borderColor = "grey"
    Noam.style.borderColor = "white"
    Dylano.style.borderColor = "white"
    selectedPerson = "Maurits"
})
let Noam = document.querySelector(".contact2")
Noam.addEventListener("click", () => {
    textInput.value = ""
    if (selectedPerson == "Maurits") {
        data1 = textDisplay.innerHTML
        textDisplay.innerHTML = ""
        textDisplay.innerHTML += data2
    } else if (selectedPerson == "Dylano") {
        data3 = textDisplay.innerHTML
        textDisplay.innerHTML = ""
        textDisplay.innerHTML += data2
    }
    Maurits.style.borderColor = "white"
    Noam.style.borderColor = "grey"
    Dylano.style.borderColor = "white"
    selectedPerson = "Noam"
})
let Dylano = document.querySelector(".contact3")
Dylano.addEventListener("click", () => {
    textInput.value = ""
    if (selectedPerson == "Maurits") {
        data1 = textDisplay.innerHTML
        textDisplay.innerHTML = ""
        textDisplay.innerHTML += data3
    } else if (selectedPerson == "Noam") {
        data2 = textDisplay.innerHTML
        textDisplay.innerHTML = ""
        textDisplay.innerHTML += data3
    }
    Maurits.style.borderColor = "white"
    Noam.style.borderColor = "white"
    Dylano.style.borderColor = "grey"
    selectedPerson = "Dylano"
})