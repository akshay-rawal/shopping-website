document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Handle login logic here (e.g., validate username/password)
        document.cookie = "hasLoggedIn=true; path=/";

        // After successful login, redirect to the main page
        window.location.href = 'index.html';
    });
});
