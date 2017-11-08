exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('sports', (table) => {
      table.increments('id')
      table.string('name')
      table.string('category')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('sports')
};
