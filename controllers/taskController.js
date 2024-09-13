// Purpose: Controller for tasks
// Model: id, title, description, completed = false, created_at = new Date()
let tasks = [
    {
        id: 1,
        title: 'Tarea 1',
        description: 'Descripcion de la Tarea 1',
    },
    {
        id: 2,
        title: 'Tarea 2',
        description: 'Descripcion de la Tarea 2',
    },
    {
        id: 3,
        title: 'Tarea 3',
        description: 'Descripcion de la Tarea 3',
    }
]

// Get all tasks
function getAllTasks() {
    return tasks;
}

// Create a new task
function createTask(title, description) {
    const newTask = {
        id: tasks.length + 1,
        title,
        description
    }
    tasks.push(newTask);
    return newTask;
}

// delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
    return tasks;
}

// update task
function updateTask(id, title, description) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks[index].title = title;
        tasks[index].description = description;
    }
    return tasks;
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask
}