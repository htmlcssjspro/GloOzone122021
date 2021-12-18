'use strict';

const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartloseBtn = cartModal.querySelector('.cart-close');

    const openCart = () => cartModal.style.display = 'flex';
    const closeCart = () => cartModal.style.display = '';

    cartBtn.addEventListener('click', openCart);
    cartloseBtn.addEventListener('click', closeCart);
};
export default cart;
