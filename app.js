window.addEventListener('scroll', function(){
    const header = document.getElementById('memul')
    header.classList.toggle("sticky", window.scrollY > 0);
});

function next(){
    document.getElementById('quad').scrollLeft += 550;
};

function prev(){
    document.getElementById('quad').scrollLeft -= 550;
};
