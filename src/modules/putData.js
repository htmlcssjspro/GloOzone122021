'use strict';

import dbUrl from './db';
// `${dbUrl}`

const putData = (id) => {
    return fetch(`${dbUrl}/${id}`, {
        method: 'PUT',
        body:   JSON.stringify({
            title:    'Ведьмак 3',
            price:    3000,
            sale:     true,
            img:      'https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg',
            // hoverImg: 'https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg',
            category: 'Игры и софт'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
};

export default putData;
