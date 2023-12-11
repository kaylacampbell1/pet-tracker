/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return knex.schema.createTable('pets', table => {
    table.increments('id').primary();
    table.string('name');
    table.string('image');
    table.string('species');
    table.boolean('friendly');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('pets');
};
