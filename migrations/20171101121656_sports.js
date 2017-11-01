exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('sports', (table) => {
      table.increments('id')
      table.string('name')
      table.string('category')
      table.string('description')
      table.string('image_url')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('sports')
};
