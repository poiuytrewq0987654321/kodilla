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



//tworzenie boxów z id

function boxCreate() {
    for (var i = 1; i < 6; i++) {
        var body = document.getElementById('body');
        var box = '<div class="box"><div class="header"></div><div class="box-content"></div></div>';
        body.innerHTML = box + body.innerHTML;
    };
}
boxCreate();

//rozłożenie danych z Data na poszczególne obiekty i dodanie id

/*    for (var i = 0; i < 5; i++) {
        var boxList = document.querySelectorAll('.box')[i];
        boxList.id = "box" + (i+1);
    };*/




function sepData() {
    for (var i = 0; i < 5; i++) {
        var dataObject = data[i];
        var boxList = document.querySelectorAll('.box')[i];
        boxList.id = dataObject.id;

        var headerList = document.querySelectorAll('.header')[i];
        headerList.innerHTML = dataObject.title;

        var contentList = document.querySelectorAll('.box-content')[i];
        contentList.innerHTML = dataObject.content;
    };
    
    
    for (var i = 0; i < 5; i++) {
        var dataObject = data[i];
        var boxColor = dataObject.categories;
        console.log(boxColor);
        var box = document.getElementsByClassName('box')[i];
    };
    
    for( var i = 0; i < boxColor.length; i++ ){
		if(typeof(boxColor[i]) == highlighted){
			box.className += " highlighted";
		};
	}
}
sepData();
