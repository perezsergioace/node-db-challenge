
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'resource 1 name', description: 'resource 1 description', project_id: '1'},
        {name: 'resource 2 name', description: 'resource 2 description', project_id: '2'},
        {name: 'resource 3 name', description: 'resource 3 description', project_id: '3'},
      ]);
    });
};
