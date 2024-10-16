const express = require('express')
const router = express.Router()
const { createTask, getTask, updateTask, deleteTask } = require('../controller/task.controller')

router.post('/', createTask)

router.get('/', getTask)

router.put('/:id', updateTask)

router.delete('/:id', deleteTask)

module.exports = router