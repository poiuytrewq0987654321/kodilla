'use strict';


var rundNumber = prompt('witaj w grze papier/kamień/nożyce! Podaj ilość rund jakie chcesz rozegrać:');

var userPointsPlace = document.getElementById('user-points');
var compPointsPlace = document.getElementById('comp-points');

var userPoints = 0;
var compPoints = 0;

var compChoicePlace = document.getElementById('comp-choice')

var firstButton = document.getElementById('first-button');
var secondButton = document.getElementById('second-button');
var thirdButton = document.getElementById('third-button');
var opisRozgrywki = document.getElementById('opis-rozgrywki');
var iloscRund = document.getElementById('ilosc-rund');

iloscRund.innerHTML = rundNumber;



firstButton.addEventListener('click', function () {
    var compChoice = Math.floor((Math.random() * 3) + 1);

    function computerChoice() {
        if (compChoice == 1) {
            compChoicePlace.innerHTML = 'papier';
        } else if (compChoice == 2) {
            compChoicePlace.innerHTML = 'kamień';
        } else if (compChoice == 3) {
            compChoicePlace.innerHTML = 'nożyce';
        }
    }

    computerChoice();

    function zliczaniePkt() {
        if (compChoice == 1) {
            compPoints++;
            compPointsPlace.innerHTML = compPoints;
            opisRozgrywki.innerHTML = 'uuu! komputer ostro gra i wygrał tym razem!';
        } else if (compChoice == 3) {
            userPoints++;
            userPointsPlace.innerHTML = userPoints;
            opisRozgrywki.innerHTML = 'wygrałeś! punkt dla Ciebie!';
        } else {
            opisRozgrywki.innerHTML = 'remis';
        }
        if (compPoints == rundNumber) {
            alert('koniec gry przegrałeś lamusie z komputerem!!!');
        } else if (userPoints == rundNumber) {
            alert('jesteś mega! wygrałeś z komputerem!!!');
        }
    }

    zliczaniePkt();
});



secondButton.addEventListener('click', function () {
    computerChoice();
    var compChoice = Math.floor((Math.random() * 3) + 1);

    function computerChoice() {
        if (compChoice == 1) {
            compChoicePlace.innerHTML = 'papier';
        } else if (compChoice == 2) {
            compChoicePlace.innerHTML = 'kamień';
        } else if (compChoice == 3) {
            compChoicePlace.innerHTML = 'nożyce';
        }
    }

    computerChoice();

    function zliczaniePkt() {
        if (compChoice == 2) {
            compPoints++;
            compPointsPlace.innerHTML = compPoints;
            opisRozgrywki.innerHTML = 'uuu! komputer ostra gra i wygrał tym razem!';
        } else if (compChoice == 1) {
            userPoints++;
            userPointsPlace.innerHTML = userPoints;
            opisRozgrywki.innerHTML = 'wygrałeś! punkt dla Ciebie!';
        } else {
            opisRozgrywki.innerHTML = 'remis';
        }
        if (compPoints == rundNumber) {
            alert('koniec gry przegrałeś lamusie z komputerem!!!');
        } else if (userPoints == rundNumber) {
            alert('jesteś mega! wygrałeś z komputerem!!!');
        }
    }

    zliczaniePkt();
});

thirdButton.addEventListener('click', function () {
    computerChoice();
    var compChoice = Math.floor((Math.random() * 3) + 1);

    function computerChoice() {
        if (compChoice == 1) {
            compChoicePlace.innerHTML = 'papier';
        } else if (compChoice == 2) {
            compChoicePlace.innerHTML = 'kamień';
        } else if (compChoice == 3) {
            compChoicePlace.innerHTML = 'nożyce';
        }
    }

    computerChoice();

    function zliczaniePkt() {
        if (compChoice == 3) {
            compPoints++;
            compPointsPlace.innerHTML = compPoints;
            opisRozgrywki.innerHTML = 'uuu! komputer ostra gra i wygrał tym razem!';
        } else if (compChoice == 2) {
            userPoints++;
            userPointsPlace.innerHTML = userPoints;
            opisRozgrywki.innerHTML = 'wygrałeś! punkt dla Ciebie!';
        } else {
            opisRozgrywki.innerHTML = 'remis';
        }
        if (compPoints == rundNumber) {
            alert('koniec gry przegrałeś lamusie z komputerem!!!');
        } else if (userPoints == rundNumber) {
            alert('jesteś mega! wygrałeś z komputerem!!!');
        }
    }

    zliczaniePkt();
});
