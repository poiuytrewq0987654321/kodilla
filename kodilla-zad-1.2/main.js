'use strict';
(function () {
    /* W kodzie HTML i CSS dodaliśmy style dla prostego modala, który będzie zawsze wyśrodkowany w oknie. 
	
        Teraz wystarczy napisać funkcję otwierającą modal:
        */

    var showModal = function (event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.add('show');
        var modalOne = document.getElementById("modal-one");
        var modalTwo = document.getElementById("modal-two");
        var modalThree = document.getElementById("modal-three");



        var linkA = document.getElementsByTagName('a')[0].getAttribute('href');
        var linkB = document.getElementsByTagName('a')[1].getAttribute('href');
        var linkC = document.getElementsByTagName('a')[2].getAttribute('href');
        console.log(linkA);
        console.log(linkB);
        console.log(linkC);

        var elements = document.getElementsByTagName('a');
        console.log(elements);

        if (elements[0].onclick = function () {
                {
                    modalOne.classList.add('show');
                }
            });

        if (elements[1].onclick = function () {
                {
                    modalTwo.classList.add('show');
                }
            });
        if (elements[2].onclick = function () {
                {
                    modalThree.classList.add('show');
                }
            });

    }



    // Mimo, że obecnie mamy tylko jeden link, stosujemy kod dla wielu linków. W ten sposób nie będzie trzeba go zmieniać, kiedy zechcemy mieć więcej linków lub guzików otwierających modale

    var modalLinks = document.querySelectorAll('.show-modal');

    for (var i = 0; i < modalLinks.length; i++) {
        modalLinks[i].addEventListener('click', showModal);
    }

    // Dodajemy też funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close". 

    var hideModal = function (event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.remove('show');
    };

    var closeButtons = document.querySelectorAll('.modal .close');

    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', hideModal);
    }

    // Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay. 

    document.querySelector('#modal-overlay').addEventListener('click', hideModal);

    // Musimy jednak pamiętać, aby zablokować propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 

    var modals = document.querySelectorAll('.modal');

    for (var i = 0; i < modals.length; i++) {
        modals[i].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }

    /* I to wszystko - mamy już działający modal! 
	
            ĆWICZENIE: 
            Zmień funkcję showModal tak, aby w momencie wyświetlania była zmieniana treść nagłówka na dowolną inną, np. "Modal header". 
            */

}());
