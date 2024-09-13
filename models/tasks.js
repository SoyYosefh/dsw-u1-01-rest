// Purpose: Model for tasks

class Task {

    constructor(id, title, description, completed = false, created_at = new Date()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.created_at = created_at;
    }


}