'use strict';
import getData from './getData';
import renderGoods from './renderGoods';
import {categoryFilter} from './filters';

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button>button');
    const catalogModal = document.querySelector('.catalog');
    const catalogItems = catalogModal.querySelectorAll('li');
    let isOpen = false;
    btnCatalog.addEventListener('click', event => {
        isOpen = !isOpen;
        catalogModal.style.display = isOpen ? 'block' : '';
    });

    catalogItems.forEach(item => {
        item.addEventListener('click', event => {
            const text = item.textContent;
            getData().then(data => {
                renderGoods(categoryFilter(data, text));
            });
        });
    });
};

export default catalog;
