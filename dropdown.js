document.querySelectorAll('.add').forEach(button => {
  button.addEventListener('click', function() {
      const itemCountElement = this.nextElementSibling; // Get the span element next to the + button
      
      // Check if itemCountElement exists and is an element
      if (itemCountElement && itemCountElement.classList.contains('itemCount')) {
          let itemCount = parseInt(itemCountElement.textContent); // Get current count

          if (itemCount < 5) { // Increase the count only if it's less than 5
              itemCount++;
              itemCountElement.textContent = itemCount; // Update the count in the UI
          }
      } else {
          console.error('Item count element not found.');
      }
  });
});

document.querySelectorAll('.remove').forEach(button => {
  button.addEventListener('click', function() {
      const itemCountElement = this.previousElementSibling; // Get the span element before the - button
      
      // Check if itemCountElement exists and is an element
      if (itemCountElement && itemCountElement.classList.contains('itemCount')) {
          let itemCount = parseInt(itemCountElement.textContent); // Get current count

          if (itemCount > 0) { // Decrease the count only if it's more than 0
              itemCount--;
              itemCountElement.textContent = itemCount; // Update the count in the UI
          }
      } else {
          console.error('Item count element not found.');
      }
  });
});
