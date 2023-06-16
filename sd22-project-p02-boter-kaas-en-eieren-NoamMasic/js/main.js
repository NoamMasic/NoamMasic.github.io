let turn = "X";
let clickable = true
let xScore = 0;
let oScore = 0;
let clicks = 0
const cellX = document.querySelector('#xscore');
const cellO = document.querySelector('#oscore');

function ontileclick(event) {
    console.log(event);
    if(event.target.textContent ==  "" && clickable == true){
        
        if (event.target.textContent == "") {
            event.target.textContent = turn;
            event.target.classList.add("clicked")
            
            if (turn == "X") {
                turn = "X";
                document.querySelector(".beurt").textContent = turn;
                clickable = false
                clicks += 1
                checkWinner()
                setTimeout(bot, 1000)
            } else {
                turn = "X";
                document.querySelector(".beurt").textContent = turn;
            }
        } else {
            return;
        }
    } 
}

const tiles = document.body.querySelectorAll(".doos");

for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener("click", ontileclick)
}

let t1 = document.querySelector(".t1")
let t2 = document.querySelector(".t2")
let t3 = document.querySelector(".t3")
let t4 = document.querySelector(".t4")
let t5 = document.querySelector(".t5")
let t6 = document.querySelector(".t6")
let t7 = document.querySelector(".t7")
let t8 = document.querySelector(".t8")
let t9 = document.querySelector(".t9")

let Xwinner = false
let Owinner = false

function checkWinner() {
    if (t1.textContent == "X" && t2.textContent == "X" && t3.textContent == "X") {
        Xwinner = true
        alert("X heeft gewonnen")
        clickable = false
        updateScore('X');
        clearTiles()
    } else if (t4.textContent == "X" && t5.textContent == "X" && t6.textContent == "X") {
        Xwinner = true
        alert("X heeft gewonnen")
        clickable = false
        updateScore('X');
        clearTiles()
    } else if (t7.textContent == "X" && t8.textContent == "X" && t9.textContent == "X") {
        Xwinner = true
        alert("X heeft gewonnen")
        clickable = false
        updateScore('X');
        clearTiles()
    } else if (t1.textContent == "X" && t4.textContent == "X" && t7.textContent == "X") {
        Xwinner = true
        alert("X heeft gewonnen")
        clickable = false
        updateScore('X');
        clearTiles()
    } else if (t2.textContent == "X" && t5.textContent == "X" && t8.textContent == "X") {
        Xwinner = true
        alert("X heeft gewonnen")
        clickable = false
        updateScore('X');
        clearTiles()
    } else if (t3.textContent == "X" && t6.textContent == "X" && t9.textContent == "X") {
        Xwinner = true
        alert("X heeft gewonnen")
        clickable = false
        updateScore('X');
        clearTiles()
    } else if (t1.textContent == "X" && t5.textContent == "X" && t9.textContent == "X") {
        Xwinner = true
        alert("X heeft gewonnen")
        clickable = false
        updateScore('X');
        clearTiles()
    } else if (t3.textContent == "X" && t5.textContent == "X" && t7.textContent == "X") {
        Xwinner = true
        alert("X heeft gewonnen")
        clickable = false
        updateScore('X');
        clearTiles()
    } else if (t1.textContent == "O" && t2.textContent == "O" && t3.textContent == "O") {
        Owinner = true
        alert("O heeft gewonnen")
        clickable = false
        updateScore('O');
        clearTiles()
    } else if (t4.textContent == "O" && t5.textContent == "O" && t6.textContent == "O") {
        Owinner = true
        alert("O heeft gewonnen")
        clickable = false
        updateScore('O');
        clearTiles()
    } else if (t7.textContent == "O" && t8.textContent == "O" && t9.textContent == "O") {
        Owinner = true
        alert("O heeft gewonnen")
        clickable = false
        updateScore('O');
        clearTiles()
    } else if (t1.textContent == "O" && t4.textContent == "O" && t7.textContent == "O") {
        Owinner = true
        alert("O heeft gewonnen")
        clickable = false
        updateScore('O');
        clearTiles()
    } else if (t2.textContent == "O" && t5.textContent == "O" && t8.textContent == "O") {
        Owinner = true
        alert("O heeft gewonnen")
        clickable = false
        updateScore('O');
        clearTiles()
    } else if (t3.textContent == "O" && t6.textContent == "O" && t9.textContent == "O") {
        Owinner = true
        alert("O heeft gewonnen")
        clickable = false
        updateScore('O');
        clearTiles()
    } else if (t1.textContent == "O" && t5.textContent == "O" && t9.textContent == "O") {
        Owinner = true
        alert("O heeft gewonnen")
        clickable = false
        updateScore('O');
        clearTiles()
    } else if (t3.textContent == "O" && t5.textContent == "O" && t7.textContent == "O") {
        Owinner = true
        alert("O heeft gewonnen")
        clickable = false
        updateScore('O');
        clearTiles()
    }
    if(clicks == 9){
        clearTiles()
        alert("Gelijkspel!")
    }
}

function updateScore(player) {
    if (player === 'X') {
        xScore++;
        cellX.textContent = xScore;
    } else if(player === "O"){
        oScore++;
        cellO.textContent = oScore;
    }
}

function clearTiles() {
    t1.textContent = "";
    t2.textContent = "";
    t3.textContent = "";
    t4.textContent = "";
    t5.textContent = "";
    t6.textContent = "";
    t7.textContent = "";
    t8.textContent = "";
    t9.textContent = "";
    clicks = 0
}

function bot(){
    let botArray = [t1, t2, t3, t4, t5 ,t6 ,t7, t8, t9]
    let computer = Math.floor(Math.random() * 9);
    let randomdoos = botArray[computer]
    if (randomdoos.textContent == ""){
        randomdoos.textContent = "O"
        console.log(randomdoos)
        clicks += 1
        checkWinner()
        clickable = true
    } else{
        bot()
    }
}