window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ff6347';
        item.style.fontSize = '30px';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = '';
        item.style.fontSize = '';
    });
});
