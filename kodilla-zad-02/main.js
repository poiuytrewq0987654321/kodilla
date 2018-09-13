'use strict';

var output = document.getElementById('greeter-output');
var secondOutput = document.getElementById('secondOutput');

var button = document.getElementById('greeter-button');
var secondButton = document.getElementById('secondButton');

button.addEventListener('click', function () {

    var temp = window.prompt('podaj wysokość temperatury:');
    var tempC = temp + 'C';
    var tempF = temp * 1.8 + 32 + 'F';

    if (isNaN(temp)) {

        alert('to nie jest liczba!');
    } else {

        output.innerHTML = '<br>' + tempC + '<br>' + tempF + '<br>' + output.innerHTML;
        if (temp > 30) {
            output.innerHTML = 'ale gorąco! wziąłeś okulary przeciwsłoneczne?' + output.innerHTML;
        } else if (temp > 10) {
            output.innerHTML = 'proponujemy wziąć drobną kurtkę w typie "wiatrówka"' + output.innerHTML;
        } else if (temp > 0) {
            output.innerHTML = 'prosimy koniecznie zabrać czapkę i ciepłą kurtkę' + output.innerHTML;
        } else {
            output.innerHTML = 'prosimy zabrać ciepłe napoje, grube kurtki i czapki' + output.innerHTML;
        }
    }



});

secondButton.addEventListener('click', function () {

    var temp = window.prompt('podaj wysokość temperatury:');
    var tempF = temp + 'F';
    var tempC = (temp - 32) / 1.8 + 'C';

    if (isNaN(temp)) {

        alert('to nie jest liczba!');
    } else {

        secondOutput.innerHTML = '<br>' + tempF + '<br>' + tempC + '<br>' + secondOutput.innerHTML;
        if (temp > 85) {
            secondOutput.innerHTML = 'ale gorąco! wziąłeś okulary przeciwsłoneczne?' + secondOutput.innerHTML;
        } else if (temp > 50) {
            secondOutput.innerHTML = 'proponujemy wziąć drobną kurtkę w typie "wiatrówka"' + secondOutput.innerHTML;
        } else if (temp > 32) {
            secondOutput.innerHTML = 'prosimy koniecznie zabrać czapkę i ciepłą kurtkę' + secondOutput.innerHTML;
        } else {
            secondOutput.innerHTML = 'prosimy zabrać ciepłe napoje, grube kurtki i czapki' + secondOutput.innerHTML;
        }
    }


});
