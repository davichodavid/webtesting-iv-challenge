exports.up = function(knex, Promise) {
  return knex.schema.createTable("sports", table => {
    table.increments();
    table.string("name", 255).notNullable();
    table.integer("players").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("sports");
};
