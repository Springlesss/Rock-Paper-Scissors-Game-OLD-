const player = document.querySelector("#player-dec-render")
const enemy = document.querySelector("#ene-dec-render")
let cash = 0
let rpos = ["Scissors", "Rock", "Paper"]
const rockBtn = document.querySelector("#rock")
const ScissorsBtn = document.querySelector("#scissors")
const paperBtn = document.querySelector("#paper")
const decRendered = document.querySelector("#player-dec-render")
let hasRock = false 
let hasPaper = false
let hasScissors = false
let playerHasC = false
const gameState = document.querySelector("#gameState")




rockBtn.addEventListener("click", function() {
    decRendered.textContent += " " + "Rock"
    hasRock = true
    playerHasC = true
    botC(enemy)
    gameLogic()
    console.log("dsad")
});

ScissorsBtn.addEventListener("click", function() {
    decRendered.textContent += " " + "Scissors"
    hasScissors = true
    playerHasC = true
    botC(enemy)
    gameLogic()
})

paperBtn.addEventListener("click", function() {
    decRendered.textContent += " " + "Paper"
    hasPaper = true
    playerHasC = true
    
    botC(enemy)
    gameLogic()
})




//enemy
let eHas = {
    paper: false,
    rock: false,
    scissors: false
}

function botC(e) {
    let randomNumber = Math.floor(Math.random()*3)
    e.textContent += " " + rpos[randomNumber]
    
    if (e.textContent === "Enemy: Scissors") {
        eHas.scissors = true
    } else if (e.textContent === "Enemy: Rock") {
        eHas.rock = true
    } else if (e.textContent === "Enemy: Paper") {
        eHas.paper = true
    }
    
}

const cRBtn = document.createElement("button");

function gameLogic() {
    if (hasRock === true && eHas.rock === true) {
        gameState.textContent = "Tie!"
        cRBtn.innerHTML = `<button id="rBtn" onclick="restart()">Restart</button>`
        document.querySelector("#gameState").appendChild(cRBtn)
    } else if (hasPaper === true && eHas.paper === true){
        gameState.textContent = "Tie!"
        cRBtn.innerHTML = `<button id="rBtn" onclick="restart()">Restart</button>`
        document.querySelector("#gameState").appendChild(cRBtn)
    } else if (hasScissors === true && eHas.scissors === true){
        gameState.textContent = "Tie!"
        cRBtn.innerHTML = `<button id="rBtn" onclick="restart()">Restart</button>`
        document.querySelector("#gameState").appendChild(cRBtn)
    } else if (hasPaper === true && eHas.scissors === true) {
        gameState.textContent = "You lost!"
        cRBtn.innerHTML = `<button id="rBtn" onclick="restart()">Restart</button>`
        document.querySelector("#gameState").appendChild(cRBtn)
    } else if (hasPaper === true && eHas.rock === true) {
        gameState.textContent = "You won!"
        cRBtn.innerHTML = `<button id="rBtn" onclick="restart()">Restart</button>`
        document.querySelector("#gameState").appendChild(cRBtn)
    } else if (hasRock === true && eHas.paper === true) {
        gameState.textContent = "You lost!"
        cRBtn.innerHTML = `<button id="rBtn" onclick="restart()">Restart</button>`
        document.querySelector("#gameState").appendChild(cRBtn)
    } else if (hasRock === true && eHas.scissors === true) {
        gameState.textContent = "You won!"
        cRBtn.innerHTML = `<button id="rBtn" onclick="restart()">Restart</button>`
        document.querySelector("#gameState").appendChild(cRBtn)
    } else if (hasScissors === true && eHas.paper === true) {
        gameState.textContent = "You won!"
        cRBtn.innerHTML = `<button id="rBtn" onclick="restart()">Restart</button>`
        document.querySelector("#gameState").appendChild(cRBtn)
    } else if (hasScissors === true && eHas.rock === true) {
        gameState.textContent = "You lost!"
        cRBtn.innerHTML = `<button id="rBtn" onclick="restart()">Restart</button>`
        document.querySelector("#gameState").appendChild(cRBtn)
    }
    
}


function restart() {
    location.reload()
}