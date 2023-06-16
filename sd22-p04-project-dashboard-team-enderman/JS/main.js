let loginPage = document.querySelector(".login-page");
let loginbutton = document.querySelector(".login-login");
let closePage = document.querySelector(".login-close");
let logIn = document.querySelector(".inloggen");
let chatbotText = document.querySelector(".chatbot-text");
let chatbotTextText = document.querySelector(".chatbot-text-text");
let displayText = document.querySelector(".display-text");

let userChatText; //Variabel for storing the chosen usertext where we will reply on

logIn.addEventListener("click", showHideLogin);
closePage.addEventListener("click", showHideLogin);
loginbutton.addEventListener("click", loggingIn);

document.querySelector("main").addEventListener("click", function (event) {
    if (!event.target.classList.contains("chatbot-button")) {
        chatbotTextText.value = ""
        if (chatbotText.style.display == "grid") {
            chatbotText.style.display = "none"
            chatbotButton.textContent = "Chatbot"
        }
    }
})

function showHideLogin() {
    let showHide = loginPage.style.display
    if (showHide == "block") {
        loginPage.style.display = "none"
    } else {
        loginPage.style.display = "block"
    }
}

let inputText = document.querySelector(".input-text")
let inputEmail = document.querySelector(".input-email")
let inputPassword = document.querySelector(".input-password")

function loggingIn() {
    if (inputText.value == "" || inputEmail.value == "" || inputPassword.value == "") {
        if (inputText.value == "") {
            inputText.style.border = "solid red 3px"
            setTimeout(function () {
                inputText.style.border = "solid black 3px"
            }, 1000)
        }
        if (inputEmail.value == "") {
            inputEmail.style.border = "solid red 3px"
            setTimeout(function () {
                inputEmail.style.border = "solid black 3px"
            }, 1000)
        }
        if (inputPassword.value == "") {
            inputPassword.style.border = "solid red 3px"
            setTimeout(function () {
                inputPassword.style.border = "solid black 3px"
            }, 1000)
        }
    } else {
        showHideLogin()
        inputText.value = ""
        inputEmail.value = ""
        inputPassword.value = ""
    }
}

chatbotTextText.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        chatbotButton.click();
    }
})

let chatbotButton = document.querySelector(".chatbot-button")
chatbotButton.addEventListener("click", showHideChatbot)

function showHideChatbot() {
    chatbotText.style.display = "grid"
    chatbotButton.textContent = "Send"

    if (chatbotTextText.value.trim() != "") {
        displayText.innerHTML += `<div class="custom-text right">${chatbotTextText.value}</div>`
        displayText.scrollTop = displayText.scrollHeight - displayText.clientHeight;
        chatbotTextText.disabled = "true"
        userChatText = chatbotTextText.value;
        chatbotTextText.value = ""; //Empty the textarea contents/ value

        setTimeout(botReact, 10);
    }
}

let botreaction
let greetings = ["Hoi", "Hallo", "Hey"]

function createSentence() {
    console.log(userChatText)
    switch (true) {
        case userChatText.includes("hoi") || userChatText.includes("Hoi"):
            botreaction = greetings[Math.floor(Math.random() * greetings.length)]
            break;
        case userChatText.includes("niet") && userChatText.includes("inloggen"):
            botreaction = "Sorry, de inlog pagina is nog niet compleet."
            break;
        case userChatText.includes("waar") && userChatText.includes("inloggen"):
            botreaction = `Je kan inloggen door rechtsboven op "inloggen" te klikken`
            break;
        case userChatText.includes("Maurits") && userChatText.includes("werkt niet"):
            botreaction = "Sorry Maurits is fucking langzaam"
            break;
        case userChatText.includes("Noam") && userChatText.includes("werkt niet"):
            botreaction = "Hij is een hele harde werker en is nog bezig"
            break;
        case userChatText.includes("Dylano") && userChatText.includes("werkt niet"):
            botreaction = "Hij is skeer maar is wel slim"
            break;
        default:
            botreaction = "Sorry, ik begrijp het niet"
            break;
    }
    userChatText = ''; //Clear the chosen text
}

function botReact() {
    createSentence()
    displayText.innerHTML += `<div class="custom-text">${botreaction}</div>`
    displayText.scrollTop = displayText.scrollHeight - displayText.clientHeight;
    chatbotTextText.disabled = ""
}

// ---------------------------------------------------

let dots = [],
    mouse = {
        x: 0,
        y: 0
    };

let Dot = function () {
    this.x = 0;
    this.y = 0;
    this.node = (function () {
        let n = document.createElement("div");
        n.className = "trail";
        document.body.appendChild(n);
        return n;
    }());
};

Dot.prototype.draw = function () {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
};

for (let i = 0; i < 12; i++) {
    let d = new Dot();
    dots.push(d);
}

function draw() {
    let x = mouse.x,
        y = mouse.y;

    dots.forEach(function (dot, index, dots) {
        let nextDot = dots[index + 1] || dots[0];

        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * .6;
        y += (nextDot.y - dot.y) * .6;

    });
}

addEventListener("mousemove", function (event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
});

function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();