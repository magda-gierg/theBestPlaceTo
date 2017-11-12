exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('places', (table) => {
      table.increments('place_id')
      table.string('place_name')
      table.integer('sport_id')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('places')
};
