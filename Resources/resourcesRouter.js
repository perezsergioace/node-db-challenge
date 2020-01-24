const express = require('express');
const Resources = require('./resourcesModel');
const router = express.Router();

router.get('/', (req, res) => {
    Resources.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(error => {
            res.status(500).json({error: "Error retrieving resources(500)"})
        })
})

router.post('/', (req, res) => {
    const body = req.body;

    Resources.add(body)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(error => {
            res.status(500).json({error: "Error posting resource"})
        })
})

module.exports = router;