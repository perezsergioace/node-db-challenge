
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project 1', description: 'project 1 description', completed: false},
        {name: 'project 2', description: 'project 2 description', completed: true},
        {name: 'project 3', description: 'project 3 description', completed: false},
      ]);
    });
};
