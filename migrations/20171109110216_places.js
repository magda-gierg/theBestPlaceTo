exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('places', (table) => {
      table.increments('place_id')
      table.string('place_name')
      table.string('place_img')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('places')
};
