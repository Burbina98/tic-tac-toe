let currentPlayer = "player 1";
let spaces = document.getElementsByClassName("space");
let running = false;
let player1Sym =  document.getElementById("player1Sym").innerHTML;

let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


//starts the game
initializeGame();


//Ths function is the first to run every time the game begins. 
function initializeGame(){
    running = true;
    displayPlayerMove();

    for (var i = 0; i < spaces.length; i++) {
        spaces[i].addEventListener('click', clickCell);
    }

}

//Displays whose turn it is on the screen.
function displayPlayerMove(){
    document.getElementById("playerDis").innerHTML = currentPlayer + "'s turn. Select an empty space.";
}

function clickCell(){
    const clicked = this.getAttribute("cellIndex");
     
    if (spaces[clicked].innerHTML != ""){
        return;
    } 

    placePlayerSym(this, clicked);
    checkWinner();
}

/**
 * Trying to bring the styles along with the content.
 */

// changing the content of the clicked element
function placePlayerSym(cell, index){
    if (currentPlayer === "player 1"){
        cell.innerHTML = document.getElementById("player1Sym").innerHTML;
    }else{
        cell.innerHTML = "O";
    }
    
    changePlayer();
    displayPlayerMove();


   
}

function changePlayer(){
    if (currentPlayer === "player 1"){
        currentPlayer = "player 2";
    }else{
        currentPlayer = "player 1";
    }
}


