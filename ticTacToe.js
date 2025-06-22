/**
 --------VARIABLES-----------
 */
let currentPlayer = "player 1";
let spaces = document.getElementsByClassName("space");
let running = false;
let player1Sym =  "X";
let player2Sym =  "O";
// let restartBtn = document.getElementById("restartBtn");
let options = ["", "", "", "", "", "", "", "", ""];
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




/*
-------FUNCTIONS------
*/

//Ths function is the first to run every time the game begins. 
//Sets an event listener to every spaces that calls upon a clickCell function on click.
//sets an event listener to the button that calls upon a restartGame function on click.
function initializeGame(){
    running = true;
    currentPlayer = "player 1"
    
    displayPlayerMove();

    for (var i = 0; i < spaces.length; i++) {
        spaces[i].addEventListener('click', clickCell);
    }
    document.getElementById("restartBtn").addEventListener('click', restartGame);


}

//Displays whose turn it is on the screen.
function displayPlayerMove(){
    document.getElementById("playerDis").innerHTML = currentPlayer + "'s turn. Select an empty space.";
}

//Places the clicked cell inside a variable and calls necessary functions to manipulate content.
function clickCell(){
    const clicked = this.getAttribute("cellIndex");
     
    if (options[clicked] != "" || !running){
        return;
    } 

    placePlayerSym(this, clicked);
    checkWinner();
    changePlayer();
    displayPlayerMove();

}



// changing the content of the clicked element
function placePlayerSym(cell, index){
    if (currentPlayer === "player 1"){
        cell.innerHTML = player1Sym;
        cell.style.color = "red";
        cell.style.fontFamily = "Huninn";
        options[index] = player1Sym;
    }else{
        cell.innerHTML = player2Sym;
        cell.style.color = "blue";
        cell.style.fontFamily = "Huninn";
        options[index] = player2Sym;

    }
    

}

//Switches the currentPlayer variable depending on the value.
function changePlayer(){
    if (currentPlayer === "player 1"){
        currentPlayer = "player 2";
    }else{
        currentPlayer = "player 1";
    }
}


//Compare the current board state to the winning conditions 
function checkWinner(){
    let roundWon = false;
    for (var i = 0; i < winConditions.length; i++){
        let condition = winConditions[i];
        let cell1 = options[condition[0]];
        let cell2 = options[condition[1]];
        let cell3 = options[condition[2]];
        
        if(cell1 == "" || cell2 == "" || cell3 == ""){
            continue;
        }
        if(cell1 == cell2 && cell2 == cell3){
            roundWon = true;
        }
    }

    if (roundWon){
        alert(currentPlayer + " Wins!!"  );
        running = false;
        return;
    }else if (!options.includes("")){
        alert("Draw! Restart and try again.");
        running = false;
        return;
    }
}

function restartGame(){
    running = true;

    for (var i = 0; i < spaces.length; i++) {
        if (spaces[i].innerHTML != ""){
            spaces[i].innerHTML = "";
        }
    }
    for (var i = 0; i < options.length; i++) {
        if (options[i] != ""){
            options[i] = "";
        }
    }
    initializeGame();
}
