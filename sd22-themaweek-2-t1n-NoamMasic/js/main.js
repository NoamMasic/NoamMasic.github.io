const loopman = document.querySelector(".loopman");
const doos = document.querySelector(".doos");
const crate = document.querySelector(".woodenBox");
let jumpable = true

function jump(){
    if(jumpable == true){
        loopman.classList.add("jump")
        jumpable = false
        setTimeout(function(){
            loopman.classList.remove("jump")
            jumpable = true
        },500)
    }

}

document.addEventListener("keydown", function (event){
    console.log(event);
    jump();
});


let isAlive; //Empty variable to fill with timer ID

function startGame() {
    crateMove(); //Show one of the crates (top or bottom)

    isAlive = setInterval(function(){    
        const loopManTop = loopman.getBoundingClientRect();
        
        console.log(loopManTop.top);

        let doosLeft = parseInt(window.getComputedStyle(doos).getPropertyValue("left"))
        let crateLeft = parseInt(window.getComputedStyle(crate).getPropertyValue("left"))

        if(doosLeft < 80 && doosLeft > 0) {
            if (loopManTop.top >= 440) {
                console.log("collision440");
                alert("game over");
                window.location.reload()
                clearTimeout(isAlive);
                doos.classList.add('hidden');
                crate.classList.add('hidden');
            } else if (doosLeft < 10) {
                crateMove();
            }
        } else if (crateLeft < 50 && crateLeft > 0) {
            if (loopManTop.top <= 503 && loopManTop.top > 350) {
                console.log("collision503");
                alert("game over");
                window.location.reload()
                clearTimeout(isAlive);
                doos.classList.add('hidden');
                crate.classList.add('hidden');
            } else if (crateLeft < 10) {
                crateMove();
            }
        }
    },1);
}

function crateMove() {
    let doosarray = [doos, crate];
    let randomGenerator = Math.floor(Math.random()*2);
    console.log(randomGenerator);
    doos.classList.add('hidden');
    crate.classList.add('hidden');
    if (randomGenerator == 0) {
        doos.classList.remove('hidden');
    } else {
        crate.classList.remove('hidden');
    }
}

startGame();

let meters = 0
setInterval(function(){
    document.querySelector(".distance").innerHTML = `Distance walked: ${meters += 1}M` 
}, 500)

