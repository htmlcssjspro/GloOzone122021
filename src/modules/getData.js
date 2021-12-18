'use strict';

const getData = () => {
    return fetch('https://ozone-197c6-default-rtdb.firebaseio.com/goods.json')
        .then((response) => response.json());
};

export default getData;
