let Intro = document.getElementById("Intro");
let Single = document.getElementById("Single");
let Multiple = document.getElementById("Multiple");
let Back = document.getElementById("Back");

let multiple = false;

Single.style.display = "none";
Multiple.style.display = "none";
Back.style.display = "none";

let pScore = 0;
let aiScore = 0;
let player1Score = 0;
let player2Score = 0;

let a = document.getElementById("a");
let pScore1 = document.getElementById("pScore");
let aiScore1 = document.getElementById("aiScore");
let comp = document.getElementById("comp");

let b = document.getElementById("b");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let check11 = document.getElementById("check1");

let p1 = null;
let p2 = null;


function reset() {
    Intro.style.display = "block";
    Single.style.display = "none";
    Multiple.style.display = "none";
    Back.style.display = "none";
    multiple = false;
    pScore = 0;
    aiScore = 0;
    player1Score = 0;
    player1.innerHTML = "0";
    player2Score = 0;
    player2.innerHTML = "0";
}



function check1() {
    Intro.style.display = "none";
    Single.style.display = "block";
    Back.style.display = "block";
    a.innerHTML = "Rock Paper Scissors";
    a.style.color = "black";
    pScore1.innerHTML = "0";
    aiScore1.innerHTML = "0";
}

function check2() {
    Intro.style.display = "none";
    Multiple.style.display = "block";
    Back.style.display = "block";
    multiple = true;
    b.innerHTML = "Rock Paper Scissors";
    player1.innerHTML = "0"
    player1.innerHTML = "0";
    check11.innerHTML = "START";
}

function checking() {
    let bSingle = document.getElementById("bSingle");
    bSingle.innerHTML = "Play Again!";
    let player = document.querySelector('input[name="run"]:checked').value;
    const choises = ["Paper", "Scissors", "Rock"];
    let ai = choises[Math.floor(Math.random() * choises.length)];

    if (player == ai) {
        a.innerHTML = "DRAW!";
        a.style.color = "white";
    } else if (
        (player == "Paper" && ai == "Scissors") ||
        (player == "Scissors" && ai == "Rock") ||
        (player == "Rock" && ai == "Paper")) {
        aiScore++;
        a.innerHTML = "You Lost!";
        a.style.color = "red";
    } else {
        pScore++;
        a.innerHTML = "You Won!";
        a.style.color = "green";
    }

    pScore1.innerHTML = pScore;
    aiScore1.innerHTML = aiScore;
    comp.innerHTML = ai;
}

document.onkeydown = function(event) {
    if (multiple) {
        if (check11.innerHTML == "START") {
            keyPressedChecker(event);
        } else if (event.key == " ") {
            b.innerHTML = "Rock Paper Scissors";
            b.style.color = "white";
            check11.innerHTML = "START";
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

    if ((p1 != null) && (p2 != null)) {
        multipleCheck(p1, p2);
        p1 = null;
        p2 = null;
    }
}

function multipleCheck(one, two) {
    if (one == two) {
        b.innerHTML = "DRAW";
        b.style.color = "white";
    } else if (one == "Rock" && two == "Paper") {
        b.innerHTML = "Player 2 Wins!";
        b.style.color = "red";
        player2Score++;
    } else if (one == "Rock" && two == "Scissors") {
        b.innerHTML = "Player 1 Wins!";
        b.style.color = "green";
        player1Score++;
    } else if (one == "Paper" && two == "Rock") {
        b.innerHTML = "Player 1 Wins!";
        b.style.color = "green";
        player1Score++;
    } else if (one == "Paper" && two == "Scissors") {
        b.innerHTML = "Player 2 Wins!";
        b.style.color = "red";
        player2Score++;
    } else if (one == "Scissors" && two == "Paper") {
        b.innerHTML = "Player 1 Wins!";
        b.style.color = "red";
        player1Score++;
    } else if (one == "Scissors" && two == "Rock") {
        b.innerHTML = "Player 2 Wins!";
        b.style.color = "red";
        player2Score++;
    }

    check11.innerHTML = "PRESS \"SPACE\" KEY TO PLAY AGAIN";
    player1.innerHTML = player1Score;
    player2.innerHTML = player2Score;
}