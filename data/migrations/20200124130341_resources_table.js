
exports.up = function(knex) {
    return knex.schema
    .createTable("resources", tbl => {
        tbl.increments();

        tbl.string("name", 255)
            .notNullable()
            .index();

        tbl.string("description", 255);

        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects");
            // .onDelete("RESTRICT")
            // .onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("resources")
};
