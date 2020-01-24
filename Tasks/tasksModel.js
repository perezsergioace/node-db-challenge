const db = require('../data/dbconfig');

module.exports = {
    get,
    getById,
    add,
}

function get() {
    return db("tasks")
      .join("projects", "tasks.project_id", "projects.id")
      .select(
        "projects.name as project_name",
        "projects.description as project_description",
        "tasks.description as task_description",
        "tasks.notes as task_notes",
        "tasks.completed"
      );
  }

function getById(id) {
    return db("tasks")
        .where({ id })
        .first();
}

function add(task) {
    return db("tasks")
        .insert(task)
        .then(ids => {
            return getById(ids[0]);
        })
}