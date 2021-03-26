var text = document.getElementById('text');
var word = text.getElementsByTagName('span');
var i = 0;

function rotator (){
    word[i].style.display = 'none';
    i = (i + 1) % word.length;
    word[i].style.display = 'initial';
}

setInterval(rotator, 1500);

var img = document.getElementById('left')
var im = img.getElementsByTagName('img')
var o = 0;

function rotatorr (){
    im[o].style.display = 'none';
    o = (o + 1) % im.length;
    im[o].style.display = 'initial';
}

setInterval(rotatorr, 3000);
