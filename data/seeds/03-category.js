
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {category_type: 'Tool'},
        {category_type: 'Anime'},
        {category_type: 'Comic'},

      ]);
    });
};
