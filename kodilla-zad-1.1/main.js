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
var dataLength = data.length;

var boxList;
var body = document.getElementById('body');

//creating boxes

function boxCreate() {
    for (var i = 0; i < dataLength; i++) {
            var newBox = document.createElement('div');
            newBox.className = 'box';
            document.getElementById('body').appendChild(newBox);
        
            var newHeaderBox = document.createElement('div');
            newHeaderBox.className = 'header';
            document.getElementsByClassName('box')[i].appendChild(newHeaderBox);
        
            var newContentBox = document.createElement('div');
            newContentBox.className = 'box-content';
            document.getElementsByClassName('box')[i].appendChild(newContentBox);
    };
}
boxCreate();

//separate Data and add IDs/headers/content

function sepData() {
    for (var i = 0; i < dataLength; i++) {
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

//add class for specific elements

function addClass(){
    for (var i = 0; i < dataLength; i++){
        boxList = document.querySelectorAll('.box')[i];
        var boxHeader = document.querySelectorAll('.header')[i];

        if (data[i].categories.includes(highlighted)){
            boxList.className += " highlighted";
        }
        if (data[i].categories.includes(important)){
            boxList.className += " important";
        }
        if (data[i].categories.includes(specialHeader)){
            boxHeader.className += " special-header";
        }
    }
}
addClass();