window.addEventListener('scroll', function(){
    const header = document.getElementById('memul')
    header.classList.toggle("sticky", window.scrollY > 0);
});

function next(){
    document.getElementById('quad').scrollLeft += 390;
};

function prev(){
    document.getElementById('quad').scrollLeft -= 390;
};

function send(){
    var btn = document.getElementById('btn-send')
    const inputs = document.querySelectorAll('.inpForm')
    let reqs = 0

    for (let i = 0; i < inputs.length; i++){
        if(inputs[i].value.length != 0){
            reqs++
        }
    }

    if (reqs == inputs.length){
        setTimeout(       
            function(){
            inputs.forEach(e=>{e.style.pointerEvents='none'; e.style.userSelect='none'; e.style.backgroundColor='#9a9a9a29'})
            btn.style.pointerEvents='none'; btn.style.backgroundColor='#00ff62'; btn.style.color='#000'; btn.style.fontWeight='800'; btn.textContent='Enviado'; btn.style.userSelect='none'}, 500)
    } else {
    alert('ops... Você esqueceu de responder algo!')
    }
}