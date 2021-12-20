'use strict';

export const searchFilter = (goods, value) => {
    return goods.filter(item => {
        return item.title.toLowerCase().includes(value.toLowerCase());
    });
};

export const categoryFilter = (goods, value) => {
    return goods.filter(item => {
        return item.category === value;
    });
};

export const priceFilter = (goods, min, max) => {
    return goods.filter(item => {
        return item.price >= min && item.price <= max;
    });
};

export const hotSaleFilter = (goods, hotSale) => {
    return goods.filter(item => {
        if (hotSale) {
            return item.sale === true;
        } else {
            return item;
        }
    });
};
