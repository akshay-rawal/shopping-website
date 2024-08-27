document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Hide all sections
        document.querySelectorAll('.apparel-section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Show the target section
        targetSection.style.display = 'block';
        
        // Optionally, scroll to the top of the section
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
