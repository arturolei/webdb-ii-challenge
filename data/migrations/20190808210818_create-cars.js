
exports.up = function(knex) {
    return knex.schema.createTable('cars', (table) => {
        table.increments('id');
        table.text('VIN', 128).unique().notNullable();
        table.text('make', 128).notNullable();
        table.integer('model').notNullable();
        table.decimal('mileage').notNullable();
        table.text('transmission',128);
        table.text('title',128);
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
