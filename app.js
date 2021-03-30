var text = document.getElementById('text');
var word = text.getElementsByTagName('span');
var i = 0;

function rotator (){
    word[i].style.display = 'none';
    i = (i + 1) % word.length;
    word[i].style.display = 'initial';
}

setInterval(rotator, 1500);

function abreMenu(){
    var menuA = document.getElementById('memul')
    menuA.classList.toggle("viraisso")
}

var fundoPerso = document.getElementById('imagem')
var te = document.getElementById('p-i')

function toggleMenuA(){
    let menu = document.querySelector('#quad-1');
    let toggle = document.querySelector('#pega');
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
    fundoPerso.classList.toggle('dialogos')
    te.classList.toggle('p-i-none')

}

function toggleMenuB(){
    let menu2 = document.querySelector('#quad-2');
    let toggle2 = document.querySelector('#pega2');
    menu2.classList.toggle('active');
    toggle2.classList.toggle('active');
    fundoPerso.classList.toggle('neutrum')
    te.classList.toggle('p-i-none')
}


function toggleMenuC(){
    let menu3 = document.querySelector('#quad-3');
    let toggle3 = document.querySelector('#pega3');
    menu3.classList.toggle('active');
    toggle3.classList.toggle('active');
    fundoPerso.classList.toggle('pomba')
    te.classList.toggle('p-i-none')
}


