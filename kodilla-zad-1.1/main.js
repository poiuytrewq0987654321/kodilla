'use strict';

var data = [
    {
        id: 'box1',
        title: 'First box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'special-header', 'important']
	},
    {
        id: 'box2',
        title: 'Second box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['special-header', 'important']
	},
    {
        id: 'box3',
        title: 'Third box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'important']
	},
    {
        id: 'box4',
        title: 'Fourth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted']
	},
    {
        id: 'box5',
        title: 'Fifth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: []
	},
];

var highlighted = 'highlighted';
var important = 'important';
var specialHeader = 'special-header';

var boxList;
var body = document.getElementById('body');

//tworzenie boxów z id

function boxCreate() {
    for (var i = 1; i < 6; i++) {

        var box = '<div class="box"><div class="header"></div><div class="box-content"></div></div>';
        body.innerHTML = box + body.innerHTML;
    };
}
boxCreate();

//rozłożenie danych z Data na poszczególne obiekty i dodanie: id/content/header

function sepData() {
    for (var i = 0; i < 5; i++) {
        var dataObject = data[i];

        boxList = document.querySelectorAll('.box')[i];
        boxList.id = dataObject.id;

        var headerList = document.querySelectorAll('.header')[i];
        headerList.innerHTML = dataObject.title;

        var contentList = document.querySelectorAll('.box-content')[i];
        contentList.innerHTML = dataObject.content;
    };
}
sepData();

//dodanie klas dla poszczególnych wybranych elementów

function addClass(){
    for (var i = 0; i < 5; i++){
        boxList = document.querySelectorAll('.box')[i];
        var boxHeader = document.querySelectorAll('.header')[i];
        console.log(boxList);
        console.log(data[i].categories);
        if(data[i].categories.includes(highlighted)){
            boxList.className += " highlighted";
        }
        if(data[i].categories.includes(important)){
            boxList.className += " important";
        }
        if(data[i].categories.includes(specialHeader)){
            boxHeader.className += " special-header";
        }
    }
}
addClass();