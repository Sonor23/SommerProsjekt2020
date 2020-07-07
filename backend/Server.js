const express = require('express');
const server = express();
const port = 5000;

server.get('/', (req, res) => res.send("Dette er en test"));

server.listen(port, () => console.log('Example app listening on port 5000'));

