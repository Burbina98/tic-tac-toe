let turn = "player1";
let spaces = document.getElementsByClassName("space");
let emptyImgs = document.getElementsByClassName("emptyImg")
let playerSym = new Image();
let gameOver = false;




initializeGame();





function initializeGame(){
        for (var i = 0; i < spaces.length; i++) {
        spaces[i].addEventListener('click', placePlayerSym);
    }

}

function clickCell(){
    const clicked = this.get
}


// changing the content of the clicked element
function placePlayerSym(){

    //Checks to see who's turn it is a places the symbol accordingly 
    if(turn === "player1"){
        playerSym = document.getElementById("red_X").src;

        if(this === document.getElementById("topL")){
            document.getElementById("topLImg").src = playerSym;
            document.getElementById("topLImg").style.display = "block";
        }else if(this === document.getElementById("topM")){
             document.getElementById("topMImg").src = playerSym;
            document.getElementById("topMImg").style.display = "block";
        }else if(this === document.getElementById("topR")){
             document.getElementById("topRImg").src = playerSym;
            document.getElementById("topRImg").style.display = "block";
        }else if(this === document.getElementById("midL")){
             document.getElementById("midLImg").src = playerSym;
            document.getElementById("midLImg").style.display = "block";
        }else if(this === document.getElementById("midM")){
             document.getElementById("midMImg").src = playerSym;
            document.getElementById("midMImg").style.display = "block";
        }else if(this === document.getElementById("midR")){
             document.getElementById("midRImg").src = playerSym;
            document.getElementById("midRImg").style.display = "block";
        }else if(this === document.getElementById("lowL")){
             document.getElementById("lowLImg").src = playerSym;
            document.getElementById("lowLImg").style.display = "block";
        }else if(this === document.getElementById("lowM")){
             document.getElementById("lowMImg").src = playerSym;
            document.getElementById("lowMImg").style.display = "block";
        }else if(this === document.getElementById("lowR")){
             document.getElementById("lowRImg").src = playerSym;
            document.getElementById("lowRImg").style.display = "block";
        }
    }else{
        
        playerSym = document.getElementById("blue_O").src;

        if(this === document.getElementById("topL")){
            document.getElementById("topLImg").src = playerSym;
            document.getElementById("topLImg").style.display = "block";
        }else if(this === document.getElementById("topM")){
             document.getElementById("topMImg").src = playerSym;
            document.getElementById("topMImg").style.display = "block";
        }else if(this === document.getElementById("topR")){
             document.getElementById("topRImg").src = playerSym;
            document.getElementById("topRImg").style.display = "block";
        }else if(this === document.getElementById("midL")){
             document.getElementById("midLImg").src = playerSym;
            document.getElementById("midLImg").style.display = "block";
        }else if(this === document.getElementById("midM")){
             document.getElementById("midMImg").src = playerSym;
            document.getElementById("midMImg").style.display = "block";
        }else if(this === document.getElementById("midR")){
             document.getElementById("midRImg").src = playerSym;
            document.getElementById("midRImg").style.display = "block";
        }else if(this === document.getElementById("lowL")){
             document.getElementById("lowLImg").src = playerSym;
            document.getElementById("lowLImg").style.display = "block";
        }else if(this === document.getElementById("lowM")){
             document.getElementById("lowMImg").src = playerSym;
            document.getElementById("lowMImg").style.display = "block";
        }else if(this === document.getElementById("lowR")){
             document.getElementById("lowRImg").src = playerSym;
            document.getElementById("lowRImg").style.display = "block";
        }
    }
}

function changePlayer(){
    if (turn === "player1"){
        turn = "player2";
    }else{
        turn = "player1";
    }
}



