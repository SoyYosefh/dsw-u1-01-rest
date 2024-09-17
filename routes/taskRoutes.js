const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Definir rutas

// GET /tasks
router.get('/getAll/', (req, res) => {
    // si envia parametros en la url
    if (Object.keys(req.params).length > 0) {
        res.status(400).json({
            code: 400,
            error: 'Datos incorrectos, no se puede enviar parametros en la url'
        });
    }
    const tasks = taskController.getAllTasks();
    if (!tasks) {
        res.status(404).json({
            code: 404,
            message: 'No hay tareas'
        });
    }
    res.status(200).json(tasks);
});

// POST /tasks
router.post('/create/', (req, res) => {
    const { title, description } = req.body;
    // si envia parametros en la url
    if (Object.keys(req.params).length > 0) {
        res.status(400).json({
            code: 400,
            error: 'Datos incorrectos, no se puede enviar parametros en la url'
        });
    }

    // si no hay titulo o descripcion
    if (!title || !description) {
        res.status(400).json({
            code: 400,
            error: 'Faltan datos'
        });
    }
    // si manda otro dato que no sea titulo o descripcion
    if (Object.keys(req.body).length > 2) {
        res.status(400).json({
            code: 400,
            error: 'Datos incorrectos, solo puede enviar "Titulo" y "Descripción"'
        });
    }

    const newTask = taskController.createTask(title, description);
    if (newTask == null) {
        res.status(400).json({
            code: 400,
            error: 'Error al crear la tarea'
        });
    }
    res.status(201).json(newTask);
});

// DELETE /tasks/:id
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            code: 400,
            error: 'Falta el "id"'
        });
    }
    // si envia mas mas daros en la url
    if (Object.keys(req.params).length > 1) {
        res.status(400).json({
            code: 400,
            error: 'Datos incorrectos, solo puede enviar "id"'
        });
    }
    const tasks = taskController.deleteTask(id);
    if (tasks == null) {
        res.status(404).json({
            code: 404,
            error: 'Tarea no encontrada'
        });
    }
    res.status(200).json(tasks);
});

// PUT /tasks/:id
router.put('/update/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            code: 400,
            error: 'Falta el "id"'
        });
    }
    // si envia mas mas daros en la url
    if (Object.keys(req.params).length > 1) {
        res.status(400).json({
            code: 400,
            error: 'Datos incorrectos, solo puede enviar "id"'
        });
    }
    const { title, description } = req.body;

    // si no hay titulo o descripcion
    if (!title || !description) {
        res.status(400).json({
            code: 400,
            error: 'Faltan datos'
        });
    }
    // si manda otro dato que no sea titulo o descripcion
    if (Object.keys(req.body).length > 2) {
        res.status(400).json({
            code: 400,
            error: 'Datos incorrectos, solo puede enviar "Titulo" y "Descripción"'
        });
    }

    const tasks = taskController.updateTask(id, title, description);
    if (tasks == null) {
        res.status(404).json({
            code: 404,
            error: 'Tarea no encontrada'
        });
    }
    res.status(200).json(tasks);
});

// GET /tasks/:id
router.get('/getId/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({
            code: 400,
            error: 'Falta el "id"'
        });
    }
    // si envia mas mas daros en la url
    if (Object.keys(req.params).length > 1) {
        res.status(400).json({
            code: 400,
            error: 'Datos incorrectos, solo puede enviar "id"'
        });
    }
    const task = taskController.getTaskById(id);
    if (!task) {
        res.status(404).json({
            code: 400,
            error: 'Tarea no encontrada'
        });
    }
    res.status(200).json(task);
});

// esportar router
module.exports = router;