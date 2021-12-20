'use strict';

import renderCart from './renderCart';
import postData from './postData';

const cart = () => {
    const cartBtn = document.getElementById('cart');
    const counter = cartBtn.querySelector('.counter');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = cartModal.querySelector('.cart-close');
    const cartTotal = cartModal.querySelector('.cart-total>span');
    const goodsWrapper = document.querySelector('.goods');
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartSendBtn = document.querySelector('.cart-confirm');

    const cart = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart')) : [];
    counter.textContent = cart.length;

    const openCart = () => {
        const cart = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart')) : [];
        renderCart(cart);
        cartTotal.textContent = cart.reduce((acc, item) => {
            return acc + item.price;
        }, 0);
        cartModal.style.display = 'flex';
    };
    const closeCart = () => cartModal.style.display = '';

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);

    goodsWrapper.addEventListener('click', event => {
        const t = event.target;
        if (t.classList.contains('btn-primary')) {
            const card = t.closest('.card');
            const id = card.dataset.id;
            const goods = JSON.parse(localStorage.getItem('goods'));
            const cart = localStorage.getItem('cart')
                ? JSON.parse(localStorage.getItem('cart')) : [];
            const goodItem = goods.find(item => {
                return item.id === +id;
            });
            cart.push(goodItem);
            localStorage.setItem('cart', JSON.stringify(cart));
            counter.textContent = cart.length;
        }
    });

    cartWrapper.addEventListener('click', event => {
        const t = event.target;
        if (t.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart')
                ? JSON.parse(localStorage.getItem('cart')) : [];
            const card = t.closest('.card');
            const id = card.dataset.id;
            const index = cart.findIndex(item => {
                return item.id === +id;
            });
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart(cart);
            cartTotal.textContent = cart.reduce((acc, item) => {
                return acc + item.price;
            }, 0);
            counter.textContent = cart.length;
        }
    });

    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart')) : [];
        postData(cart).then(() => {
            localStorage.removeItem('cart');
            renderCart([]);
            cartTotal.textContent = 0;
            counter.textContent = 0;
        });
    });
};


export default cart;
