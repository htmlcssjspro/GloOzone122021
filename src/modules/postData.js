'use strict';

import dbUrl from './db';
// `${dbUrl}`

const postData = () => {
    return fetch(dbUrl, {
        method: 'POST',
        body:   JSON.stringify({
            title:    'Ведьмак 3',
            price:    3000,
            sale:     true,
            img:      'https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg',
            hoverImg: 'https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg',
            category: 'Игры и софт'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .catch(error => console.error(error));
};

export default postData;
