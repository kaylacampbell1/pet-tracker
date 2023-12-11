/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pets').del();
  await knex("pets").insert([
    {
      name: "Fluffy",
      image:
        "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      species: "cat",
      friendly: true,
    },
    {
      name: "Lucky",
      image:
        "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg",
      species: "dog",
      friendly: false,
    },
  ]);
};
