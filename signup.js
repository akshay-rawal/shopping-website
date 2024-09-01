document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Here you can handle form data or save it locally

        // Set a cookie to indicate the user has signed up
        document.cookie = "hasSignedUp=true; path=/";

        // Redirect to the main page or another page after signup
        window.location.href = 'index.html';
    });
});

