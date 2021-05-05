window.addEventListener('scroll', function(){
    const header = document.getElementById('memul')
    header.classList.toggle("sticky", window.scrollY > 0);
});

var modal = document.getElementById('janelaModal');

var btnClose = document.getElementsByClassName("fechar")[0];


function clique(img){
    var modal = document.getElementById('janelaModal');
    var modalImg = document.getElementById("imgModal");

    modal.style.display="flex";
    modalImg.src=img.src;
    modalImg.alt=img.alt;
}

btnClose.onclick=function(){
    modal.style.display="none";
}