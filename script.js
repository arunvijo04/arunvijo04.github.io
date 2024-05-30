// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adding scroll animations to cards
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
