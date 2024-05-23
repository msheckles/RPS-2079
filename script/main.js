let Intro = document.getElementById("Intro");
let Single = document.getElementById("Single");
let Multiple = document.getElementById("Multiple");
let Back = document.getElementById("Back");

Single.style.display = "none";
Multiple.style.display = "none";
Back.style.display = "none";

var pScore = 0;
var aiScore = 0;
var player1Score = 0;
var player2Score = 0;

let a = document.getElementById("a");
let pScore1 = document.getElementById("pScore");
let aiScore1 = document.getElementById("aiScore");
let comp = document.getElementById("comp");

let b = document.getElementById("b");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let check1 = document.getElementById("check1");

let p1 = null;
let p2 = null;


function menu() {
    Intro.style.display = "block";
    Single.style.display = "none";
    Multiple.style.display = "none";
    Back.style.display = "none";
    pScore = 0;
    aiScore = 0;
}



function check1() {
    Intro.style.display = "none";
    Single.style.display = "block";
    Back.style.display = "block";
    Single.style.display = "block";
    one.innerHTML = "Rock Paper Scissors";
    one.style.color = "black";
    two.innerHTML = "0";
    three.innerHTML = "0";
}

function check2() {
    Intro.style.display = "none";
    Multiple.style.display = "block";
    Back.style.display = "block";
    Multiple.style.display = "block";
    one1.innerHTML = "Rock Paper Scissors";
    player1.innerHTML = "0"
    player1.innerHTML = "0";
    check1.innerHTML = "START";
}

function checking() {
    let bSingle = document.getElementById("bSingle");
    bSingle.innerHTML = "Play Again!";
    let player = document.querySelector('input[name="run"]:checked').value;
    console.log(player);
    const choises = ["Paper", "Scissors", "Rock"];
    let ai = choises[Math.floor(Math.random() * choises.length)];
    console.log(ai);

    if (player == ai) {
        r1(0, ai);
    } else if (
        (player == "Paper" && ai == "Scissors") ||
        (player == "Scissors" && ai == "Rock") ||
        (player == "Rock" && ai == "Paper")) {
        aiScore++;
        r1(-1, ai);
    } else {
        pScore++;
        r1(1, ai);
    }
}

function r1(s, u) {
    if (s == -1) {
        one.innerHTML = "You Lost!";
        one.style.color = "red";
    } else if (s == 1) {
        one.innerHTML = "You Won!";
        one.style.color = "green";
    } else {
        one.innerHTML = "DRAW!";
        one.style.color = "white";
    }
    two.innerHTML = pScore;
    three.innerHTML = aiScore;
    comp.innerHTML = u;
}

document.onkeydown = function(event) {
    if (multiple) {
        if (check1 == "START") {
            keyPressedChecker(event);
        } else if (event.key == " ") {
            headerBoardMulti.innerHTML = "Rock Paper Scissors";
            headerBoardMulti.style.color = "white";
            turnBoardMulti.innerHTML = "START";
            player1Select.innerHTML = '';
            player2Select.innerHTML = '';
        }
    }
}

function keyPressedChecker(event) {
    let key = event.key;

    if (key == 'A' || key == "a") {
        p1 = "Paper";
    } else if (key == 'S' || key == "s") {
        p1 = "Scissors";
    } else if (key == 'D' || key == "d") {
        p1 = "Rock";
    }

    if (key == "ArrowLeft") {
        p2 = "Paper";
    } else if (key == "ArrowUp") {
        p2 = "Scissors";
    } else if (key == "ArrowRight") {
        p2 = "Rock";
    }

    checking1(p1, p2);
}

function checking1(playerOne, playerTwo) {
    if (playerOne == playerTwo) {
        b.innerHTML = "DRAW";
        b.style.color = "white";
    } else if (playerOne == "Rock" && playerTwo == "Paper") {
        b.innerHTML = "Player 2 Wins!";
        b.style.color = custom_red;
        player2Score++;
    } else if (playerOne == "Rock" && playerTwo == "Scissors") {
        b.innerHTML = "Player 1 Wins!";
        b.style.color = "green";
        player1Score++;
    } else if (playerOne == "Paper" && playerTwo == "Rock") {
        b.innerHTML = "Player 1 Wins!";
        b.style.color = "green";
        player1Score++;
    } else if (playerOne == "Paper" && playerTwo == "Scissors") {
        b.innerHTML = "Player 2 Wins!";
        b.style.color = "red";
        player2Score++;
    } else if (playerOne == "Scissors" && playerTwo == "Paper") {
        b.innerHTML = "Player 1 Wins!";
        b.style.color = "red";
        player1Score++;
    } else if (playerOne == "Scissors" && playerTwo == "Rock") {
        headerBoardMulti.innerHTML = "Player 2 Wins!";
        headerBoardMulti.style.color = custom_red;
        player2Score++;
    }

    check1.innerHTML = "PRESS \"ENTER\" KEY TO PLAY AGAIN";
    p1 = null;
    p2 = null;
}