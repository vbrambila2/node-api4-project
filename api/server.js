const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.json({ MESSAGE: process.env.MESSAGE });
});

// server.get('/api/users', (req, res) => {
//     res.json('get');
// });

// server.post('/api/register', (req, res) => {
//     res.json('post');
// });

// server.post('/api/login', (req, res) => {
//     res.json('postTwo');
// });

module.exports = server;