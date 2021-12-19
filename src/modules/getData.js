'use strict';

import dbUrl from './db';

const getData = () => {
    // return fetch(`${dbUrl}${search ? `?search=${search}` : ''}`)
    return fetch(dbUrl)
        .then((response) => response.json());
};

export default getData;
