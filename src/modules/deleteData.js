'use strict';

import dbUrl from './db';
// `${dbUrl}`

const deleteData = (id) => {
    return fetch(`${dbUrl}/${id}`, {
        method: 'DELETE'
    });
};

export default deleteData;
