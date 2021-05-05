window.addEventListener('scroll', function(){
    const header = document.getElementById('memul')
    header.classList.toggle("sticky", window.scrollY > 0);
});