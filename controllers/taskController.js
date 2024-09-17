// Purpose: Controller for tasks
// Model: id, title, description, completed = false, created_at = new Date()

const { v4: uuidv4 } = require('uuid');

let tasks = [
    {
        id: "1",
        title: 'Tarea 1',
        description: 'Descripcion de la Tarea 1',
    },
    {
        id: "2",
        title: 'Tarea 2',
        description: 'Descripcion de la Tarea 2',
    },
    {
        id: "3",
        title: 'Tarea 3',
        description: 'Descripcion de la Tarea 3',
    }
]

// Get all tasks
function getAllTasks() {
    if (!tasks) {
        return null;
    }
    return tasks;
}

// Create a new task
function createTask(title, description) {
    if (!title || !description) {
        return null;
    }
    const newTask = {
        id: uuidv4(),
        title,
        description
    }
    tasks.push(newTask);
    return newTask;
}

// delete a task
function deleteTask(id) {
    if (!id) {
        return null;
    }
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        return tasks;
    } else {
        return null;
    }
}

// update task
function updateTask(id, title, description) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks[index].title = title;
        tasks[index].description = description;
        return tasks;
    } else {
        return null;
    }
}

// buscar por id
function getTaskById(id) {
    let task = tasks.find(task => task.id === id);
    if (!task) {
        return null;
    }
    return task;
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getTaskById
}