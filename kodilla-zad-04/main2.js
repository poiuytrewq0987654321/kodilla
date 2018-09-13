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

/* funkcja czyszczenia wyników i opisów */

function cleanScore() {
    compPoints = 0;
    userPoints = 0;
    userPointsPlace.innerHTML = 0;
    compPointsPlace.innerHTML = 0;
    opisRozgrywki.innerHTML = '';
    compChoicePlace.innerHTML ='';
}


/* funkcja obsługująca randomowy wybór przez komputer */

function computerChoice() {
    compChoice = Math.floor((Math.random() * 3) + 1);
    if (compChoice === 1) {
        compChoicePlace.innerHTML = 'papier';
    } else if (compChoice === 2) {
        compChoicePlace.innerHTML = 'kamień';
    } else if (compChoice === 3) {
        compChoicePlace.innerHTML = 'nożyce';
    }
}

/*
compChoice = Math.floor((Math.random() * 3));
var posChoi = ['papier','kamień','nożyce'];
compChoicePlace.innerHTML = posChoi[compChoice];
*/

/* funkcja zliczająca punkty i wyświetlające je w panelu bocznym + komentarze w panelu dolnym */

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

// opoznienie wyswietlenia wyniku poprzez set timeout (np. 2000 czyli 2s)
// wylaczyc mozliwosc naciskania buttonow poprzez funkcje: disable;

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

newGameButton.addEventListener('click', function () {
    rundNumber = prompt('witaj w grze papier/kamień/nożyce! Podaj ilość rund jakie chcesz rozegrać:');
    iloscRund.innerHTML = rundNumber;
    cleanScore();
});

firstButton.addEventListener('click', function () {

    computerChoice();
    zliczaniePkt(1, 3);
    scoreWatch();
});

secondButton.addEventListener('click', function () {

    computerChoice();
    zliczaniePkt(2, 1);
    scoreWatch();
});

thirdButton.addEventListener('click', function () {

    computerChoice();
    zliczaniePkt(3, 2);
    scoreWatch();
});


// wyciagnac do funkcji z 