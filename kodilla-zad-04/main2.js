'use strict';

var userPointsPlace = document.getElementById('user-points');
var compPointsPlace = document.getElementById('comp-points');

var userPoints = 0;
var compPoints = 0;

var compChoicePlace = document.getElementById('comp-choice')

var newGameButton = document.getElementById('newgame-button');
var firstButton = document.getElementById('first-button');
var secondButton = document.getElementById('second-button');
var thirdButton = document.getElementById('third-button');
var opisRozgrywki = document.getElementById('opis-rozgrywki');
var iloscRund = document.getElementById('ilosc-rund');

var compChoice;

var rundNumber = prompt('witaj w grze papier/kamień/nożyce! Podaj ilość rund jakie chcesz rozegrać:');
iloscRund.innerHTML = rundNumber;

/* cleaning scores function */

function cleanScore() {
    compPoints = 0;
    userPoints = 0;
    userPointsPlace.innerHTML = 0;
    compPointsPlace.innerHTML = 0;
    opisRozgrywki.innerHTML = '';
    compChoicePlace.innerHTML = '';
}

/* random choose by computer function */

function computerChoice() {
    compChoice = Math.floor((Math.random() * 3));
    var posChoi = ['papier', 'kamień', 'nożyce'];
    compChoicePlace.innerHTML = posChoi[compChoice];
}

/* points and comments function */

function zliczaniePkt(pktCompa, pktUsera) {
    if (compChoice == pktCompa) {
        compPoints++;
        compPointsPlace.innerHTML = compPoints;
        return opisRozgrywki.innerHTML = 'uuu! punkt dla komputera!';
    } else if (compChoice == pktUsera) {
        userPoints++;
        userPointsPlace.innerHTML = userPoints;
        return opisRozgrywki.innerHTML = 'punkt dla Ciebie!';
    }
    return opisRozgrywki.innerHTML = 'remis';
}


/* score watch function */

function scoreWatch() {
    if (compPoints == rundNumber) {
        alert('koniec gry przegrałeś lamusie z komputerem!!!');
        cleanScore();
    }
    if (userPoints == rundNumber) {
        alert('jesteś mega! wygrałeś z komputerem!!!');
        cleanScore();
    }
}

/* click buttons function */

newGameButton.addEventListener('click', function () {
    rundNumber = prompt('witaj w grze papier/kamień/nożyce! Podaj ilość rund jakie chcesz rozegrać:');
    iloscRund.innerHTML = rundNumber;
    cleanScore();
});


firstButton.addEventListener('click', function () {

    computerChoice();
    zliczaniePkt(0, 2);
    setTimeout(scoreWatch, 1000);
});

secondButton.addEventListener('click', function () {

    computerChoice();
    zliczaniePkt(1, 0);
    setTimeout(scoreWatch, 1000);
});

thirdButton.addEventListener('click', function () {

    computerChoice();
    zliczaniePkt(2, 1);
    setTimeout(scoreWatch, 1000);
});
