'use strict';

var output = document.getElementById('greeter-output');
var secondOutput = document.getElementById('second-output');

var button = document.getElementById('greeter-button');
var secondButton = document.getElementById('second-button');

//destrukturyzacja zmiennych
//zamiast alert uzyc throw new Error (wartosc pojawi sie w konsoli)

const tempRatio = 1.8;
const diffFahrenheitCelc = 32;

function tempInfo(temp, tempC, tempF, htmlPlace) {
    if (isNaN(temp) ||  temp =='' || temp ==null) {
        throw new Error('błędna wartość - wpisz liczbę!');
    }
    htmlPlace.innerHTML = '<br>' + Math.round(tempC) +'C'+ '<br>' + Math.round(tempF)+'F'+ '<br>';
    if (tempC > 30) {
        return htmlPlace.innerHTML = 'ale gorąco! wziąłeś okulary przeciwsłoneczne?' + htmlPlace.innerHTML;
    } else if (tempC > 10) {
        return htmlPlace.innerHTML = 'proponujemy wziąć drobną kurtkę w typie "wiatrówka"' + htmlPlace.innerHTML;
    } else if (tempC > 0) {
        return htmlPlace.innerHTML = 'prosimy koniecznie zabrać czapkę i ciepłą kurtkę' + htmlPlace.innerHTML;
    } 
    return htmlPlace.innerHTML = 'prosimy zabrać ciepłe napoje, grube kurtki i czapki' + htmlPlace.innerHTML;
    }

button.addEventListener('click', function () {

    var temp = window.prompt('podaj wysokość temperatury:');
    var tempC = temp;
    var tempF = (temp * tempRatio) + diffFahrenheitCelc;

    tempInfo(temp, tempC, tempF, output);

});

secondButton.addEventListener('click', function () {

    var temp = window.prompt('podaj wysokość temperatury:');
    var tempF = temp;
    var tempC = (temp - diffFahrenheitCelc) / tempRatio;

    tempInfo(temp, tempC, tempF, secondOutput);
});
