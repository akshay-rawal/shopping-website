document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.querySelector('#cart'); // Existing cart list
    const addButtons = document.querySelectorAll('.add');
    const removeButtons = document.querySelectorAll('.remove');
    const itemCounts = document.querySelectorAll('.itemCount');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let count = parseInt(itemCounts[index].textContent);
            if (count < 5) { // Assuming the limit is 5
                count++;
                itemCounts[index].textContent = count;
                updateCart(index, count);
            }
        });
    });

    removeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let count = parseInt(itemCounts[index].textContent);
            if (count > 0) {
                count--;
                itemCounts[index].textContent = count;
                updateCart(index, count);
            }
        });
    });

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let count = parseInt(itemCounts[index].textContent);
            if (count > 0) {
                updateCart(index, count);
            }
        });
    });

    function updateCart(index, count) {
        const slide = document.querySelectorAll('.slide')[index];
        const imgSrc = slide.querySelector('img').src;
        let cartItem = document.querySelector(`#cart [data-index="${index}"]`);

        if (!cartItem && count > 0) {
            // Create a new cart item if it doesn't exist
            cartItem = document.createElement('li');
            cartItem.setAttribute('data-index', index);
            cartItem.innerHTML = `<img src="${imgSrc}" alt="Cart Item" class="cart-img"> <span class="itemCount">${count}</span>`;
            cartList.appendChild(cartItem);
        } else if (cartItem && count > 0) {
            // Update existing cart item
            cartItem.querySelector('itemCount').textContent = count;
        } else if (cartItem && count === 0) {
            // Remove item from cart if count is 0
            cartList.removeChild(cartItem);
        }
    }
});
