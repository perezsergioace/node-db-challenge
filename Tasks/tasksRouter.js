const express = require('express');
const Tasks = require('./tasksModel');
const router = express.Router();

router.get('/', (req, res) => {
    Tasks.get()
        .then(tasks => {
            for (i = 0; i < tasks.length; i++) {
                if (tasks[i].completed === 0) {
                    (tasks[i].completed = false)
                } else {
                    (tasks[i].completed = true)
                }
            }
            res.status(200).json(tasks)
        })
        .catch(error => {
            res.status(500).json({error: "Error retrieving tasks(500)"})
        })
})

router.post('/', (req, res) => {
    const body = req.body;

    Tasks.add(body)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(error => {
            res.status(500).json({error: "Error posting task(500)"})
        })
})

module.exports = router;