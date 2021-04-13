// var text = document.getElementById('text');
// var word = text.getElementsByTagName('span');
// var i = 0;

// function rotator (){
//     word[i].style.display = 'none';
//     i = (i + 1) % word.length;
//     word[i].style.display = 'initial';
// }

// setInterval(rotator, 1500);

window.addEventListener('scroll', function(){
    const header = document.getElementById('memul')
    header.classList.toggle("sticky", window.scrollY > 0);
});

function abreMenu(){
    var menuA = document.getElementById('memul')
    menuA.classList.toggle("viraisso")
}