'use strict';

async function howdy() {
    return 'ok';
}

async function nested()  {
    await howdy();
    throw new Error('Error without context of how it was called');
}

module.exports = nested;