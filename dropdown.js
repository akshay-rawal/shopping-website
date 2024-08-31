document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.querySelector('#cart');
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

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let count = parseInt(itemCounts[index].textContent);
            if (count > 0) {
                moveToCart(index, count);
            }
        });
    });

    function moveToCart(index, count) {
        const slide = document.querySelectorAll('.slide')[index];
        const imgSrc = slide.querySelector('img').src;

        // Check if the item is already in the cart
        let cartItem = cartItems.find(item => item.index === index);
        if (cartItem) {
            // Update the count of the existing cart item
            cartItem.count = count;
            cartList.children[cartItems.indexOf(cartItem)].querySelector('span').textContent = count;
        } else {
            // Add new item to the cart
            cartItem = { index, count, imgSrc };
            cartItems.push(cartItem);

            const listItem = document.createElement('li');
            listItem.innerHTML = `<img src="${imgSrc}" class="image-size"> <span>${count}</span>`;
            cartList.appendChild(listItem);
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));

    }
});
