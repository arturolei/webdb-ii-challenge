
exports.up = function(knex) {
    return knex.schema.createTable('cars', (table) => {
        table.increments('id');
        table.decimal('VIN').unique().notNullable();
        table.text('model', 128).notNullable();
        table.decimal('mileage').notNullable();
        table.text('transmission',128);
        table.text('title',128);
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
