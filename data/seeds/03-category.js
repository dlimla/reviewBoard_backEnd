
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category_name: 'Tool'},
        {category_name: 'Anime'},
        {category_name: 'Comic'},

      ]);
    });
};
