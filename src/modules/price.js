'use strict';

import getData from './getData';
import renderGoods from './renderGoods';
import {priceFilter} from './filters';

const price = () => {
    const $min = document.getElementById('min');
    const $max = document.getElementById('max');

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

export default price;
