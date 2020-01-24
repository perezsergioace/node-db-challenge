const express = require('express');
const projectsRouter = require('./Projects/projectsRouter');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
    res.send('This is working')
})

module.exports = server;