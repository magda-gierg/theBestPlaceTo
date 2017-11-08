exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('sports', (table) => {
      table.increments('sport_id')
      table.string('sport_name')
      table.string('sport_category')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('sports')
};
