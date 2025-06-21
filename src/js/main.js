// filepath: user-profile-page/user-profile-page/src/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message, ' + name + '!');
            form.reset();
        });
    }
});