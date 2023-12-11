/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pets').del();
  await knex('pets').insert([
    {name: 'Fluffy', image: 'https://i.imgur.com/ny5oJfR.jpg', species: 'cat', friendly: true},
    {name: 'Lucky', image: 'https://i.imgur.com/ny5oJfR.jpg', species: 'dog', friendly: false},
  ]);
};
