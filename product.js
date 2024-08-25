// Get the product link and the dropdown
const productLink = document.getElementById('productLink');
const productDropdown = document.getElementById('productDropdown');

// Toggle the dropdown menu when the product link is clicked
productLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    
    // Toggle the dropdown visibility
    if (productDropdown.style.display === 'block') {
        productDropdown.style.display = 'none';
    } else {
        productDropdown.style.display = 'block';
    }
});

// Close the dropdown if clicking outside of it
window.addEventListener('click', function(event) {
    // If the click is outside the dropdown or the product link, close the dropdown
    if (!event.target.closest('#productLink') && !event.target.closest('#productDropdown')) {
        productDropdown.style.display = 'none';
    }
});

