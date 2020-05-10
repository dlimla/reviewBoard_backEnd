const express = require('express');

const configureMiddleWare = require('./middleware.js');

const server = express();
configureMiddleWare(server);

server.get('/', (req, res) => {
    res.send('testing mock server, main splash page goes here!');
});

module.exports = server;