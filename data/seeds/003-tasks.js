
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'task 1 description', notes: 'task 1 notes', completed: false, project_id: 1},
        {description: 'task 2 description', notes: 'task 2 notes', completed: true, project_id: 1},
        {description: 'task 3 description', notes: 'task 3 notes', completed: false, project_id: 1},
      ]);
    });
};
