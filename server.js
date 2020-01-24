const express = require('express');
const projectsRouter = require('./Projects/projectsRouter');
const resourcesRouter = require('./Resources/resourcesRouter');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);

server.get('/', (req, res) => {
    res.send('This is working')
})

module.exports = server;