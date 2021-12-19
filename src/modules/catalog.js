'use strict';
import getData from './getData';
import renderGoods from './renderGoods';
import {categoryFilter, priceFilter} from './filters';

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button>button');
    const catalogModal = document.querySelector('.catalog');
    const catalogItems = catalogModal.querySelectorAll('li');
    const $min = document.getElementById('min');
    const $max = document.getElementById('max');

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


    [$min, $max].forEach(item => {
        item.addEventListener('input', event => {
            const min = $min.value ? $min.value : 0;
            const max = $max.value ? $max.value : 100000;
            getData().then(data => {
                renderGoods(priceFilter(data, min, max));
            });
        });

    });
};

export default catalog;
