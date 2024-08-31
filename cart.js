document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.querySelector('#cart-list');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<img src="${item.imgSrc}" class="image-size"> <span>${item.count}</span>`;
        cartList.appendChild(listItem);
    });
});
console.log(cartItems);
