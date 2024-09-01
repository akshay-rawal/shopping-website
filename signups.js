document.addEventListener('DOMContentLoaded', () => {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const hasSignedUpss = getCookie('hasSignedUp');
    const hasLoggedIn = getCookie('hasLoggedIn');

    if (!hasSignedUpss) {
        // Redirect to signup page if user hasn't signed up
        window.location.href = 'signup.html';
    } else if (!hasLoggedIn) {
        // Redirect to login page if user isn't logged in
        window.location.href = 'login.html';
    }
});
