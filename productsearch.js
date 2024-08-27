document.getElementById('searchbar').addEventListener('input', function() {
    // Get the search query
    const searchQuery = document.getElementById('searchbar').value.toLowerCase().trim();

    // Get all image items
    const imageItems = document.querySelectorAll('#imagegallery .image-item');

    // Track if any matches are found+
    let hasMatches = false;

    // Check if search query is empty
    if (searchQuery.length === 0) {
        // Show all image items if the search bar is empty
        imageItems.forEach(item => {
            item.style.display = 'block';
        });
        return; // Exit the function early
    }

    // Loop through each image item
    imageItems.forEach(item => {
        // Get the description of the current image item
        const desc = item.querySelector('.image-description').textContent.toLowerCase();

        // Check if the search query matches the description
        if (desc.includes(searchQuery)) {
            // Show matching items
            item.style.display = 'block';
            hasMatches = true;
        } else {
            // Hide non-matching items
            item.style.display = 'none';
        }
    });

    // Optionally, show a message if no matches are found
    if (!hasMatches) {
        // Handle no matches (e.g., show a message or just leave as is)
        // In this case, no specific message is shown
    }
});
