'use strict';
import getData from './getData';
import renderGoods from './renderGoods';
import {categoryFilter, priceFilter, hotSaleFilter} from './filters';

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button>button');
    const catalogModal = document.querySelector('.catalog');
    const catalogItems = catalogModal.querySelectorAll('li');
    const $min = document.getElementById('min');
    const $max = document.getElementById('max');
    let min = 0;
    let max = 100000;
    const $checkbox = document.getElementById('discount-checkbox');
    const $checkboxSpan = document.querySelector('.filter-check_checkmark');

    let isOpen = false;

    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen;
        catalogModal.style.display = isOpen ? 'block' : '';
    });

    catalogItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent;
            getData().then(data => {
                renderGoods(categoryFilter(data, text));
            });
        });
    });

    [$min, $max].forEach(item => {
        item.addEventListener('input', () => {
            min = $min.value ? +$min.value : 0;
            max = $max.value ? +$max.value : 100000;
            getData().then(data => {
                renderGoods(priceFilter(hotSaleFilter(data, $checkbox.checked), min, max));
            });
        });
    });

    $checkbox.addEventListener('change', () => {
        if ($checkbox.checked) {
            $checkboxSpan.classList.add('checked');
        } else {
            $checkboxSpan.classList.remove('checked');
        }
        getData().then(data => renderGoods(priceFilter(hotSaleFilter(data, $checkbox.checked), min, max)));
    });

};

export default catalog;
