let turn = "X";
let clickable = true
let xScore = 0;
let oScore = 0;
const cellX = document.querySelector('#xscore');
const cellO = document.querySelector('#oscore');

function ontileclick(event) {
    console.log(event);
    // if(event.target.textContent ==  "" && clickable == true){
        
        if (event.target.textContent == "") {
            event.target.textContent = turn;
            event.target.classList.add("clicked")
            
            if (turn == "X") {
                turn = "O";
                document.querySelector(".beurt").textContent = turn;
            } else {
                turn = "X";
                document.querySelector(".beurt").textContent = turn;
            }
        } else {
            return;
        }
        
    checkWinner()
    isGameDraw()
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
    if (t1.classList.contains("clicked") && t2.classList.contains("clicked") && t3.classList.contains("clicked") &&
        t4.classList.contains("clicked") && t5.classList.contains("clicked") && t6.classList.contains("clicked") &&
        t7.classList.contains("clicked") && t8.classList.contains("clicked") && t9.classList.contains("clicked") &&
        Xwinner == false) {
        alert("Gelijk spel")
        clearTiles()
        t1.classList.remove("clicked")
        t2.classList.remove("clicked")
        t3.classList.remove("clicked")
        t4.classList.remove("clicked")
        t5.classList.remove("clicked")
        t6.classList.remove("clicked")
        t7.classList.remove("clicked")
        t8.classList.remove("clicked")
        t9.classList.remove("clicked")
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

}

function isGameDraw() {
    let isDraw = true;
    for (let i = 0; i < tiles.length; i++) {

        if (tiles[i].textContent == "") {
            isDraw = false;
            break;
        }else{
            alert("Gelijkspel");
            clearTiles();
        }
    }

    return isDraw;
}