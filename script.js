const sidebar =document.querySelector('.sidebar');
const show_sidebar = document.getElementById('show_sidebar');
const close_sidebar = document.getElementById('close_sidebar');

show_sidebar.addEventListener('click', function(){
    sidebar.classList.add('active');
})

close_sidebar.addEventListener('click', function(){
    sidebar.classList.remove('active');
});

window.sr = ScrollReveal({ reset: true });

sr.reveal('[data-sr="nav"]', {
    duration: 1000,
    origin: 'top',
    distance: '50px',
    delay: 200,
    easing: 'ease-in-out'
});

sr.reveal('[data-sr="hero"]', {
    duration: 1200,
    origin: 'bottom',
    distance: '50px',
    delay: 300,
    easing: 'ease-in-out'
});

sr.reveal('[data-sr="about"]', {
    duration: 1200,
    origin: 'left',
    distance: '50px',
    delay: 400,
    easing: 'ease-in-out'
});

sr.reveal('[data-sr="counter"] .counter_col', {
    duration: 1000,
    origin: 'bottom',
    distance: '30px',
    delay: 200,
    interval: 200, // Staggered effect for each counter item
    easing: 'ease-in-out'
});

sr.reveal('[data-sr="properties"]', {
    duration: 1200,
    origin: 'right',
    distance: '50px',
    delay: 400,
    easing: 'ease-in-out'
});

sr.reveal('[data-sr="feature"]', {
    duration: 1200,
    origin: 'bottom',
    distance: '50px',
    delay: 300,
    easing: 'ease-in-out'
});

sr.reveal('[data-sr="contact"]', {
    duration: 1200,
    origin: 'left',
    distance: '50px',
    delay: 400,
    easing: 'ease-in-out'
});

sr.reveal('[data-sr="footer"]', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    delay: 200,
    easing: 'ease-in-out'
});