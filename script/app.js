let userScore = 0;
let compScore = 0;
let player1 = 0;
let player2 = 0;

var actives = ["paper", "scisssors", "rock"];


function reset_page() {

    document.getElementById('intro').style.display = 'block';

    document.getElementById('win').style.display = 'none';

    document.getElementById('lose').style.display = 'none';

    document.getElementById('draw').style.display = 'none';

    // document.getElementById('game-button').innerHTML = 'START';

    // document.getElementById('turn').innerHTML = 'Your Turn';

    // let radiobuttons = document.getElementsByName('choice');

    for (let i = 0; i < radiobuttons.length; i++) {
        radiobuttons[i].checked = false;
    }

}

function scoreUpdate() {
    document.getElementById('result').innerHTML = 'You ' + userScore + ':' + compScore + ' AI';
}

function userWin() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('win').style.display = 'block';
    userScore++;
    scoreUpdate();
}

function userLost() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('lose').style.display = 'block';
    compScore++;
    scoreUpdate();
}

function draw() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('draw').style.display = 'block';
}

function play() {
    const choises = ["paper", "scisssors", "rock"];
    const computer = choises[Math, floor(Math.random() * choises.length)];

    if (computer == user) {

    } else if (
        (computer == "paper" && user == "scissors") ||
        (computer == "rock" && user == "paper") ||
        (computer == "scissors" && user == "rock")
    ) {

    } else {

    }
}


function check(choise) {
    if (choise == 'paper') {
        compChoise(paper)
    } else if (choise == 'scissors') {

    } else {

    }
}

function compChoise(user) {

}

function result() {

}

function first() {
    if (page == true) {
        document.getElementById("")
    }
}