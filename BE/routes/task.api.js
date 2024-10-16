const express = require('express')
const router = express.Router()
const taskController = require('../controller/task.controller')

router.post('/', taskController.createTask)

router.get('/', taskController.getTask)

router.put('/:id', taskController.updateTask)

router.delete('/:id', (req, res)=> {
    res.send('del task')
})

module.exports = router