const express = require('express');
const Projects = require('./projectsModel');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.get()
        .then(projects => {
            res.json(projects)
        })
        .catch(error => {
            res.json(500).json({error: "Failed to get projects (500)"})
        })
})

router.post('/', (req, res) => {
    const body = req.body;

    Projects.add(body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(error => {
            res.status(500).json({error: "Error posting project(500)"})
        })
})

module.exports = router;