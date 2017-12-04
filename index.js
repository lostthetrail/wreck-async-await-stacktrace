'use strict';

const Http = require('http');
const Wreck = require('wreck');

const server = Http.createServer((request, response) => {
    response.writeHead(500, {'Content-Type': 'application/json'});
    response.end();
});
server.listen(8080, (err) => {
    if (err) throw err;
});

async function init() {
    try {
        const {payload} = await Wreck.get('http://localhost:8080/badUrl', {json: true});
    } catch(err) {
        console.error(err.stack);
    }
}

init().then(() => process.exit(0)).catch((err) => {
    console.error(err);
    process.exit(1);
});