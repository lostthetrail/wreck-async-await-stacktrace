'use strict';

const externalLibExample = require('./external');

async function init() {
    await externalLibExample();
}

init().catch((err) => {console.log(err.stack);});