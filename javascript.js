document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(href);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Simple form validation feedback
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const message = form.querySelector('#message').value.trim();
            if (!name || !email || !message) {
                alert('Please fill in all fields before submitting.');
            }
            else{
                alert('Details submitted successfully!');
            }
        });
    }
});