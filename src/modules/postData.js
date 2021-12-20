'use strict';

const postData = (cart) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method:  'POST',
        body:    JSON.stringify(cart),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .catch(error => console.error(error));
};

export default postData;
