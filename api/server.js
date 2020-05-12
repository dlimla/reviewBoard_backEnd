const express = require('express');

// const configureMiddleWare = require('./middleware.js');

const server = express();
// configureMiddleWare(server);

server.get('/', (req, res) => {
    res.send('testing mock server, main splash page goes here!');
});

// server.listen(5000, () => {
//     console.log('Server running on local host')
// })

module.exports = server;