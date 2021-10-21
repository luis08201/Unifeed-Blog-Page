const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    if(toggle.classList.contains('active')){
         toggle.classList.add('fa-times');
         toggle.classList.remove('fa-bars');
    }else{
        toggle.classList.remove('fa-times');
         toggle.classList.add('fa-bars');
    }
})