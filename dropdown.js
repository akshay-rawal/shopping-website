document.addEventListener('DOMContentLoaded', () => {
 

    const addButtons = document.querySelectorAll('.add');
    const removeButtons = document.querySelectorAll('.remove');
    const itemCounts = document.querySelectorAll('.itemCount');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = []; // Array to track items in the cart

    addButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let count = parseInt(itemCounts[index].textContent);
            if (count < 5) {
                count++;
                itemCounts[index].textContent = count;
            }
        });
    });

    removeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let count = parseInt(itemCounts[index].textContent);
            if (count > 0) {
                count--;
                itemCounts[index].textContent = count;
            }
        });
    }); 
    
});
