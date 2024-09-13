const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Definir rutas

// GET /tasks
router.get('/', (req, res) => {
    const tasks = taskController.getAllTasks();
    res.status(200).json(tasks);
});

// POST /tasks
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newTask = taskController.createTask(title, description);
    res.status(201).json(newTask);
});

// DELETE /tasks/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const tasks = taskController.deleteTask(parseInt(id));
    res.status(200).json(tasks);
});

// PUT /tasks/:id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const tasks = taskController.updateTask(parseInt(id), title, description);
    res.status(200).json(tasks);
});

// esportar router
module.exports = router;