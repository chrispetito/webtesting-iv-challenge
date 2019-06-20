exports.up = function(knex, Promise) {
    return knex.schema.createTable("players", function(table) {
      table.increments();
      table
        .string("name", 255)
        .notNullable()
        .unique();
        table.integer('jersey_number')
      table.string("position", 255).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('players')
  };
  