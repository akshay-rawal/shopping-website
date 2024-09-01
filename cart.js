function moveToCart(index, count) {
    const slide = document.querySelectorAll('.slide')[index];
    const imgSrc = slide.querySelector('img').src;

    // Check if the item is already in the cart
    let cartItem = cartItem.find(item => item.index === index);
    if (cartItem) {
        // Update the count of the existing cart item
        cartItem.count = count;
        cartList.children[cartItem.indexOf(cartItem)].querySelector('span').textContent = count;
    } else {
        // Add new item to the cart
        cartItem = { index, count, imgSrc };
        cartItem.push(cartItem);

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `<img src="${imgSrc}" class="image-size"> <span>${count}</span>`;

        // Append the new list item to the cart list
        cartList.appendChild(listItem);
    }
}

