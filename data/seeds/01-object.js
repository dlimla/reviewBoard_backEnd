
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('object').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('object').insert([
        {
          object_name: "Two Cherries 3/4in chisel",
          object_manufac: 'Two Cherries',
          object_price: "$33.39",
          object_country_origin: "Germany",
          category: 1
        },
        {
          object_name: "Stanley 3/4in Chisel",
          object_manufac: 'Two Cherries',
          object_price: "$33.39",
          object_country_origin: "Germany",
          category: 1
        }
      ]);
    });
};
